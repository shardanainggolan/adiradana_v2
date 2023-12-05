import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const useTagNavigationStore = create(
    persist(
        (set, get) => ({
            tag: [{ id: '', name: '', slug: '' }],
            setTagNavigation: () => set({ tag: get().tag = tag }),
        }),
        {
            name: 'tag-storage'
        }
    )
)

export default useTagNavigationStore