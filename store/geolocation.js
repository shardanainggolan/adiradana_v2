import { create } from 'zustand'

const useGeolocationStore = create((set) => ({
    latitude: -6.200000,
    longitude: 106.816666,
    zoom: 9.4,
    setLatitude: ({ latitude }) => set((state) => ({ latitude: state.latitude = latitude })),
    removeGeolocation: () => set({ latitude: '', longitude: '' }),
}))

export default useGeolocationStore