import type { ContentData } from 'vitepress'
import { createContentLoader } from 'vitepress'

declare const data: ContentData[]
export { data }

export default createContentLoader('blog/*.md', {
    transform: data => data.sort((a,b) =>
        new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime())
})