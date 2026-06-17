const alertData = [
  {
    id: 1,
    name: "Database Timeout",
    severity: "Critical",
    service: "Authentication API",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31",
    description: "Database queries are exceeding timeout thresholds during peak traffic.",
    submittedBy: "Monitoring System",
    submittedOn: "2026-06-17T02:30:00"
  },
  {
    id: 2,
    name: "High CPU Usage",
    severity: "High",
    service: "Web Server",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    description: "CPU utilization has exceeded 90% for more than 15 minutes.",
    submittedBy: "Monitoring System",
    submittedOn: "2026-06-17T03:15:00"
  },
  {
    id: 3,
    name: "Memory Leak Detected",
    severity: "High",
    service: "Payment Service",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
    description: "Application memory usage is continuously increasing without release.",
    submittedBy: "Monitoring System",
    submittedOn: "2026-06-16T18:45:00"
  },
  {
    id: 4,
    name: "Packet Loss Spike",
    severity: "Medium",
    service: "Network Gateway",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b",
    description: "Network packet loss has exceeded acceptable thresholds.",
    submittedBy: "Network Team",
    submittedOn: "2026-06-16T14:20:00"
  },
  {
    id: 5,
    name: "DNS Resolution Failure",
    severity: "Critical",
    service: "DNS Infrastructure",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
    description: "Clients are unable to resolve service hostnames.",
    submittedBy: "Monitoring System",
    submittedOn: "2026-06-15T09:10:00"
  },
  {
    id: 6,
    name: "Disk Space Critical",
    severity: "High",
    service: "Database Cluster",
    image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f",
    description: "Available storage capacity has fallen below 10%.",
    submittedBy: "Storage Team",
    submittedOn: "2026-06-14T22:30:00"
  },
  {
    id: 7,
    name: "SSL Certificate Expiring",
    severity: "Medium",
    service: "Public API",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3",
    description: "TLS certificate will expire within the next 7 days.",
    submittedBy: "Security Team",
    submittedOn: "2026-06-14T12:00:00"
  },
  {
    id: 8,
    name: "API Rate Limit Exceeded",
    severity: "Medium",
    service: "Partner Integration",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c",
    description: "External consumers are exceeding configured API limits.",
    submittedBy: "API Gateway",
    submittedOn: "2026-06-13T16:20:00"
  },
  {
    id: 9,
    name: "Service Unavailable",
    severity: "Critical",
    service: "Trading Platform",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    description: "Core service is returning HTTP 503 responses.",
    submittedBy: "Monitoring System",
    submittedOn: "2026-06-13T08:45:00"
  },
  {
    id: 10,
    name: "Kubernetes Pod CrashLoopBackOff",
    severity: "High",
    service: "Order Processor",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8",
    description: "Container repeatedly crashes and fails health checks.",
    submittedBy: "Kubernetes Monitor",
    submittedOn: "2026-06-12T17:00:00"
  },
  {
    id: 11,
    name: "Load Balancer Health Check Failure",
    severity: "High",
    service: "Frontend Cluster",
    image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd",
    description: "Multiple backend instances are failing health checks.",
    submittedBy: "Load Balancer",
    submittedOn: "2026-06-12T11:30:00"
  },
  {
    id: 12,
    name: "Database Replication Lag",
    severity: "Medium",
    service: "PostgreSQL Cluster",
    image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d",
    description: "Replica nodes are significantly behind the primary database.",
    submittedBy: "Database Team",
    submittedOn: "2026-06-11T15:45:00"
  },
  {
    id: 13,
    name: "Elevated Error Rate",
    severity: "High",
    service: "User Service",
    image: "https://images.unsplash.com/photo-1516321165247-4aa89a48be28",
    description: "Application error rate has exceeded 5% over the last hour.",
    submittedBy: "Application Monitoring",
    submittedOn: "2026-06-11T09:00:00"
  },
  {
    id: 14,
    name: "Unauthorized Login Attempts",
    severity: "Medium",
    service: "Identity Platform",
    image: "https://images.unsplash.com/photo-1510511459019-5dda7724fd87",
    description: "Unusual spike in failed authentication attempts detected.",
    submittedBy: "Security Monitoring",
    submittedOn: "2026-06-10T22:10:00"
  },
  {
    id: 15,
    name: "Message Queue Backlog",
    severity: "High",
    service: "Event Processing Pipeline",
    image: "https://images.unsplash.com/photo-1518186233392-c232efbf2373",
    description: "Queue depth is increasing faster than consumers can process messages.",
    submittedBy: "Messaging Platform",
    submittedOn: "2026-06-10T14:35:00"
  }
]

export default alertData