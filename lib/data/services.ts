import {
  Cloud,
  Shield,
  Brain,
  Code2,
  LineChart,
  RefreshCw,
  Database,
  Network,
} from "lucide-react";

export const services = [
  {
    id: "cloud-architecture",
    icon: Cloud,
    title: "Cloud Architecture",
    tagline: "Infrastructure built for scale.",
    description:
      "Design and migration of enterprise cloud infrastructure across AWS, Azure, and GCP. Zero-downtime migrations with 99.99% uptime SLA.",
    features: ["Multi-cloud strategy", "Cost optimization", "Infrastructure as Code", "Disaster recovery"],
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    id: "cybersecurity",
    icon: Shield,
    title: "Cybersecurity",
    tagline: "Zero-trust security at every layer.",
    description:
      "Comprehensive security audits, penetration testing, SOC setup, and ongoing threat monitoring for enterprise environments.",
    features: ["Penetration testing", "SOC as a Service", "Compliance (SOC2, ISO27001)", "Incident response"],
    color: "from-red-500/20 to-orange-500/20",
  },
  {
    id: "ai-ml-integration",
    icon: Brain,
    title: "AI & ML Integration",
    tagline: "Intelligence that compounds.",
    description:
      "End-to-end AI strategy, model development, MLOps pipelines, and LLM integration for enterprise automation and insight.",
    features: ["LLM implementation", "MLOps pipelines", "Data strategy", "Predictive analytics"],
    color: "from-violet-500/20 to-purple-500/20",
  },
  {
    id: "software-engineering",
    icon: Code2,
    title: "Software Engineering",
    tagline: "Code that outlasts trends.",
    description:
      "Full-stack enterprise application development with a focus on performance, maintainability, and developer experience.",
    features: ["Microservices architecture", "API design", "Legacy modernization", "DevOps & CI/CD"],
    color: "from-green-500/20 to-emerald-500/20",
  },
  {
    id: "digital-transformation",
    icon: RefreshCw,
    title: "Digital Transformation",
    tagline: "Change without chaos.",
    description:
      "Strategic roadmapping and execution for enterprise-wide digital transformation initiatives with measurable outcomes.",
    features: ["Technology roadmap", "Change management", "Process automation", "KPI frameworks"],
    color: "from-amber-500/20 to-yellow-500/20",
  },
  {
    id: "data-analytics",
    icon: LineChart,
    title: "Data & Analytics",
    tagline: "From raw data to real decisions.",
    description:
      "Enterprise data warehousing, BI dashboards, real-time analytics, and data governance frameworks.",
    features: ["Data warehouse design", "BI & dashboards", "Real-time analytics", "Data governance"],
    color: "from-teal-500/20 to-cyan-500/20",
  },
  {
    id: "database-engineering",
    icon: Database,
    title: "Database Engineering",
    tagline: "Performance at petabyte scale.",
    description:
      "Database architecture, optimization, and migration across relational, NoSQL, and distributed database systems.",
    features: ["Database design", "Query optimization", "Replication & HA", "NoSQL & distributed"],
    color: "from-pink-500/20 to-rose-500/20",
  },
  {
    id: "network-infrastructure",
    icon: Network,
    title: "Network Infrastructure",
    tagline: "Connectivity without compromise.",
    description:
      "Enterprise network design, SD-WAN, VPN architecture, and network performance optimization for global operations.",
    features: ["SD-WAN deployment", "Network security", "VPN & zero-trust", "Performance monitoring"],
    color: "from-indigo-500/20 to-blue-500/20",
  },
];

export type Service = (typeof services)[number];
