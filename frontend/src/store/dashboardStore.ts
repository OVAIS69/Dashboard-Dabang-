import { create } from 'zustand';
import { dashboardApi, MetricsData, RevenueData, CustomerSatisfactionData, VisitorInsightsData, TopProductsData } from '@/lib/api';

interface DashboardState {
  // Data
  metrics: MetricsData | null;
  revenue: RevenueData | null;
  customerSatisfaction: CustomerSatisfactionData | null;
  visitorInsights: VisitorInsightsData | null;
  topProducts: TopProductsData | null;

  // Loading states
  isLoadingMetrics: boolean;
  isLoadingRevenue: boolean;
  isLoadingCustomerSatisfaction: boolean;
  isLoadingVisitorInsights: boolean;
  isLoadingTopProducts: boolean;

  // Error states
  error: string | null;

  // Actions
  fetchMetrics: () => Promise<void>;
  fetchRevenue: () => Promise<void>;
  fetchCustomerSatisfaction: () => Promise<void>;
  fetchVisitorInsights: () => Promise<void>;
  fetchTopProducts: () => Promise<void>;
  fetchAllData: () => Promise<void>;
  clearError: () => void;
}

export const useDashboardStore = create<DashboardState>((set, get) => ({
  // Initial state
  metrics: null,
  revenue: null,
  customerSatisfaction: null,
  visitorInsights: null,
  topProducts: null,

  isLoadingMetrics: false,
  isLoadingRevenue: false,
  isLoadingCustomerSatisfaction: false,
  isLoadingVisitorInsights: false,
  isLoadingTopProducts: false,

  error: null,

  // Actions
  fetchMetrics: async () => {
    set({ isLoadingMetrics: true, error: null });
    try {
      const data = await dashboardApi.getMetrics();
      set({ metrics: data, isLoadingMetrics: false });
    } catch (error) {
      set({ 
        error: error instanceof Error ? error.message : 'Failed to fetch metrics',
        isLoadingMetrics: false 
      });
    }
  },

  fetchRevenue: async () => {
    set({ isLoadingRevenue: true, error: null });
    try {
      const data = await dashboardApi.getRevenue();
      set({ revenue: data, isLoadingRevenue: false });
    } catch (error) {
      set({ 
        error: error instanceof Error ? error.message : 'Failed to fetch revenue',
        isLoadingRevenue: false 
      });
    }
  },

  fetchCustomerSatisfaction: async () => {
    set({ isLoadingCustomerSatisfaction: true, error: null });
    try {
      const data = await dashboardApi.getCustomerSatisfaction();
      set({ customerSatisfaction: data, isLoadingCustomerSatisfaction: false });
    } catch (error) {
      set({ 
        error: error instanceof Error ? error.message : 'Failed to fetch customer satisfaction',
        isLoadingCustomerSatisfaction: false 
      });
    }
  },

  fetchVisitorInsights: async () => {
    set({ isLoadingVisitorInsights: true, error: null });
    try {
      const data = await dashboardApi.getVisitorInsights();
      set({ visitorInsights: data, isLoadingVisitorInsights: false });
    } catch (error) {
      set({ 
        error: error instanceof Error ? error.message : 'Failed to fetch visitor insights',
        isLoadingVisitorInsights: false 
      });
    }
  },

  fetchTopProducts: async () => {
    set({ isLoadingTopProducts: true, error: null });
    try {
      const data = await dashboardApi.getTopProducts();
      set({ topProducts: data, isLoadingTopProducts: false });
    } catch (error) {
      set({ 
        error: error instanceof Error ? error.message : 'Failed to fetch top products',
        isLoadingTopProducts: false 
      });
    }
  },

  fetchAllData: async () => {
    const { fetchMetrics, fetchRevenue, fetchCustomerSatisfaction, fetchVisitorInsights, fetchTopProducts } = get();
    
    // Fetch all data in parallel
    await Promise.allSettled([
      fetchMetrics(),
      fetchRevenue(),
      fetchCustomerSatisfaction(),
      fetchVisitorInsights(),
      fetchTopProducts(),
    ]);
  },

  clearError: () => set({ error: null }),
}));
