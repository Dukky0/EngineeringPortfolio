import React, { useEffect, useRef } from 'react';

const eventsData = [
  {
    title: 'Chip-Scale Integration Bachelor`s',
    company: 'Virginia Tech',
    startDate: '2024-08-27',
    endDate: 'Present',
    description: 'NA'
  },
  {
    title: 'Member',
    company: 'VT BOLT',
    startDate: '2024-09-15',
    endDate: '2025-05-25',
    description: 'NA'
  },
  {
    title: 'Simulation Design Team',
    company: 'Hume Research Center',
    startDate: '2024-10-10',
    endDate: '2025-05-25',
    description: 'NA'
  },
  {
    title: 'Junior Controls Lead',
    company: 'Creative Labs',
    startDate: '2025-05-25',
    endDate: 'Present',
    description: 'NA'
  },
];

const formatDate = (dateString) => {
  if (dateString === 'Present') return 'Present';
  const date = new Date(dateString);
  return date.toLocaleString('default', { month: 'short', year: 'numeric' });
};

const TimelineEvent = ({ event, position, isTopRow, offsetMultiplier }) => {
  const cardClassName = `event-card ${isTopRow ? 'top' : 'bottom'}`;
  const connectorClassName = `vertical-connector ${isTopRow ? 'top' : 'bottom'}`;

  return (
    <div className="event-wrapper" style={{ left: `${position}%` }}>
      <div
        className={connectorClassName}
        style={{ height: `${50 * offsetMultiplier}px` }}
      ></div>
      <div
        className={cardClassName}
        style={{
          [isTopRow ? "bottom" : "top"]: `calc(100% + ${50 * offsetMultiplier}px)`
        }}
      >
        <h3 className="event-title">{event.title}</h3>
        <h4 className="event-company">{event.company}</h4>
        <p className="event-dates">
          {formatDate(event.startDate)} &mdash; {formatDate(event.endDate)}
        </p>
      </div>
    </div>
  );
};

const Timeline = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            container.classList.add('animate-lines');
            observer.unobserve(container);
          }
        });
      },
      { threshold: 0.8 }
    );

    if (container) observer.observe(container);

    return () => {
      if (container) observer.unobserve(container);
    };
  }, []);

  if (!eventsData || eventsData.length === 0) {
    return <div className="timeline-wrapper"></div>;
  }

  // Calculate positions for even spacing
  const totalEvents = eventsData.length;
  // This value determines how much space to leave at the beginning and end of the timeline.
  // Using 100 / (totalEvents + 1) will give perfect spacing, with events at 25%, 50%, 75% for 3 events, for example.
  const spacingUnit = 100 / (totalEvents + 1);

  const eventPositions = eventsData.map((event, index) => {
    // Calculate position based on index, ensuring events are spaced evenly
    const position = (index + 1) * spacingUnit;
    const isTopRow = index % 2 === 0;

    return { event, position, isTopRow, index };
  });

  return (
    <div className="timeline-container" ref={containerRef}>
      <h1 className="timeline-title">Career</h1>
      <div className="timeline-wrapper">
        <div className="main-line"></div>
        {eventPositions.map((eventData) => (
          <TimelineEvent
            key={eventData.index}
            event={eventData.event}
            position={eventData.position}
            isTopRow={eventData.isTopRow}
            offsetMultiplier={1}
          />
        ))}
      </div>
    </div>
  );
};

export default Timeline;