import { defineStore } from 'pinia'
import type { Region } from '@/utils/interface'
import axiosRegionInstance from '@/utils/apiRegion'

export const useRegionStore = defineStore('region', {
  state: () => ({
    provinces: [] as Region[],
    regencies: [] as Region[],
    districts: [] as Region[],
    villages: [] as Region[],
    selectedProvince: null as Region | null,
    selectedRegency: null as Region | null,
    selectedDistrict: null as Region | null,
    selectedVillage: null as Region | null,
    loading: false,
  }),
  actions: {
    async fetchProvinces() {
      this.loading = true
      try {
        const { data: response } =
          await axiosRegionInstance.get('provinces.json')
        this.provinces = response
      } catch (error) {
        console.error('Error fetching provinces:', error)
      } finally {
        this.loading = false
      }
    },
    async fetchRegencies() {
      if (!this.selectedProvince) return
      this.loading = true
      try {
        const { data: response } = await axiosRegionInstance.get(
          `regencies/${this.selectedProvince.id}.json`,
        )
        this.regencies = response
        this.selectedRegency = null
        this.selectedDistrict = null
        this.selectedVillage = null
        this.districts = []
        this.villages = []
      } catch (error) {
        console.error('Error fetching regencies:', error)
      } finally {
        this.loading = false
      }
    },
    async fetchDistricts() {
      if (!this.selectedRegency) return
      this.loading = true
      try {
        const { data: response } = await axiosRegionInstance.get(
          `districts/${this.selectedRegency.id}.json`,
        )
        this.districts = response
        this.selectedDistrict = null
        this.selectedVillage = null
        this.villages = []
      } catch (error) {
        console.error('Error fetching districts:', error)
      } finally {
        this.loading = false
      }
    },
    async fetchVillages() {
      if (!this.selectedDistrict) return
      this.loading = true
      try {
        const { data: response } = await axiosRegionInstance.get(
          `villages/${this.selectedDistrict.id}.json`,
        )
        this.villages = response
        this.selectedVillage = null
      } catch (error) {
        console.error('Error fetching villages:', error)
      } finally {
        this.loading = false
      }
    },
    resetData() {
      this.provinces = []
      this.regencies = []
      this.districts = []
      this.villages = []
      this.selectedProvince = null
      this.selectedRegency = null
      this.selectedDistrict = null
      this.selectedVillage = null
    },
  },
})
