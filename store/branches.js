import { create } from 'zustand'

const useBranchesStore = create((set) => ({
    branches: [],
    setBranches: ({ branches }) => set((state) => ({ branches: state.branches = branches }))
}))

export default useBranchesStore