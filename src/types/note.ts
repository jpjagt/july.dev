export interface NoteFrontmatter {
  title: string
  createdAt?: string
  status?: "draft" | "published"
  synopsis?: string
}
