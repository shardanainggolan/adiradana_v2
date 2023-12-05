import { create } from 'zustand'

const useArticleContentStore = create((set) => ({
    articleContent: '',
    setArticleContent: ({ articleContent }) => set((state) => ({ articleContent: state.articleContent = articleContent })),
    removeArticleContent: () => set({ articleContent: '' }),
}))

export default useArticleContentStore