import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import type { GraphNode, GraphLink, Intellectual, Connection } from '../types';

interface NetworkGraphProps {
  intellectuals: Intellectual[];
  connections: Connection[];
  onNodeClick?: (node: GraphNode) => void;
}

const NetworkGraph: React.FC<NetworkGraphProps> = ({ intellectuals, connections, onNodeClick }) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const [dimensions, setDimensions] = useState({ width: 800, height: 600 });

  useEffect(() => {
    const handleResize = () => {
      const container = svgRef.current?.parentElement;
      if (container) {
        setDimensions({
          width: container.clientWidth,
          height: container.clientHeight || 600
        });
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!svgRef.current) return;

    const svg = d3.select(svgRef.current);
    svg.selectAll('*').remove();

    const { width, height } = dimensions;

    // Create nodes and links from data
    const nodes: GraphNode[] = intellectuals.map(intellectual => ({
      ...intellectual,
      x: width / 2 + Math.random() * 100 - 50,
      y: height / 2 + Math.random() * 100 - 50
    }));

    const links: GraphLink[] = connections.map(connection => ({
      ...connection,
      source: connection.source,
      target: connection.target
    }));

    // Create force simulation
    const simulation = d3.forceSimulation<GraphNode>(nodes)
      .force('link', d3.forceLink<GraphNode, GraphLink>(links)
        .id(d => d.id)
        .distance(150))
      .force('charge', d3.forceManyBody().strength(-300))
      .force('center', d3.forceCenter(width / 2, height / 2))
      .force('collision', d3.forceCollide().radius(50));

    // Create container for zoom
    const g = svg.append('g');

    // Add zoom behavior
    const zoom = d3.zoom<SVGSVGElement, unknown>()
      .scaleExtent([0.1, 4])
      .on('zoom', (event) => {
        g.attr('transform', event.transform);
      });

    svg.call(zoom);

    // Create links
    const link = g.append('g')
      .selectAll('line')
      .data(links)
      .enter().append('line')
      .attr('stroke', '#999')
      .attr('stroke-opacity', 0.6)
      .attr('stroke-width', 2);

    // Create nodes
    const node = g.append('g')
      .selectAll('g')
      .data(nodes)
      .enter().append('g')
      .call(d3.drag<SVGGElement, GraphNode>()
        .on('start', dragstarted)
        .on('drag', dragged)
        .on('end', dragended));

    // Add circles for nodes
    node.append('circle')
      .attr('r', 30)
      .attr('fill', d => {
        const fieldColors: { [key: string]: string } = {
          'Physics': '#4285F4',
          'Mathematics': '#DB4437',
          'Chemistry': '#F4B400',
          'Biology': '#0F9D58',
          'Astronomy': '#673AB7',
          'Electrical Engineering': '#FF5722'
        };
        return fieldColors[d.fields[0]] || '#757575';
      })
      .attr('stroke', '#fff')
      .attr('stroke-width', 2)
      .style('cursor', 'pointer')
      .on('click', (_event, d) => {
        if (onNodeClick) {
          onNodeClick(d);
        }
      });

    // Add labels
    node.append('text')
      .text(d => d.name.split(' ').pop() || '')
      .attr('text-anchor', 'middle')
      .attr('dy', 45)
      .style('font-size', '12px')
      .style('font-family', 'Arial, sans-serif')
      .style('pointer-events', 'none');

    // Add tooltip
    const tooltip = d3.select('body').append('div')
      .attr('class', 'tooltip')
      .style('opacity', 0)
      .style('position', 'absolute')
      .style('background', 'rgba(0, 0, 0, 0.8)')
      .style('color', 'white')
      .style('padding', '10px')
      .style('border-radius', '5px')
      .style('font-size', '12px')
      .style('pointer-events', 'none');

    node.on('mouseover', (event, d) => {
      tooltip.transition()
        .duration(200)
        .style('opacity', .9);
      tooltip.html(`<strong>${d.name}</strong><br/>
        ${d.birth} - ${d.death || 'present'}<br/>
        ${d.fields.join(', ')}`)
        .style('left', (event.pageX + 10) + 'px')
        .style('top', (event.pageY - 28) + 'px');
    })
    .on('mouseout', () => {
      tooltip.transition()
        .duration(500)
        .style('opacity', 0);
    });

    // Update positions on tick
    simulation.on('tick', () => {
      link
        .attr('x1', d => (d.source as GraphNode).x!)
        .attr('y1', d => (d.source as GraphNode).y!)
        .attr('x2', d => (d.target as GraphNode).x!)
        .attr('y2', d => (d.target as GraphNode).y!);

      node
        .attr('transform', d => `translate(${d.x},${d.y})`);
    });

    // Drag functions
    function dragstarted(event: d3.D3DragEvent<SVGGElement, GraphNode, GraphNode>, d: GraphNode) {
      if (!event.active) simulation.alphaTarget(0.3).restart();
      d.fx = d.x;
      d.fy = d.y;
    }

    function dragged(event: d3.D3DragEvent<SVGGElement, GraphNode, GraphNode>, d: GraphNode) {
      d.fx = event.x;
      d.fy = event.y;
    }

    function dragended(event: d3.D3DragEvent<SVGGElement, GraphNode, GraphNode>, d: GraphNode) {
      if (!event.active) simulation.alphaTarget(0);
      d.fx = null;
      d.fy = null;
    }

    // Cleanup
    return () => {
      simulation.stop();
      tooltip.remove();
    };
  }, [intellectuals, connections, dimensions, onNodeClick]);

  return (
    <svg
      ref={svgRef}
      width={dimensions.width}
      height={dimensions.height}
      style={{ border: '1px solid #ddd' }}
    />
  );
};

export default NetworkGraph;