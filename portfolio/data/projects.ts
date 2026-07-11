import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    name: "AKS NGINX to Traefik Migration",
    description:
      "Led the migration of enterprise applications from NGINX Ingress Controller to Traefik Gateway API on Azure Kubernetes Service.",
    technologies: [
      "AKS",
      "Traefik",
      "Gateway API",
      "Helm",
      "Kubernetes",
    ],
  },

  {
    name: "Azure Key Vault Integration",
    description:
      "Implemented secure secret management using Azure Key Vault, Workload Identity and External Secrets Operator.",
    technologies: [
      "AKS",
      "Azure Key Vault",
      "Workload Identity",
      "ESO",
    ],
  },

  {
    name: "Azure DevOps CI/CD Platform",
    description:
      "Built and maintained enterprise CI/CD pipelines for application deployment, security scanning and container image delivery.",
    technologies: [
      "Azure DevOps",
      "Docker",
      "AKS",
      "Helm",
    ],
  },
];