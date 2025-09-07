import { useEffect } from 'react';
import { useDashboardStore } from '@/store/dashboardStore';

export const useDashboardData = () => {
  const {
    metrics,
    revenue,
    customerSatisfaction,
    visitorInsights,
    topProducts,
    isLoadingMetrics,
    isLoadingRevenue,
    isLoadingCustomerSatisfaction,
    isLoadingVisitorInsights,
    isLoadingTopProducts,
    error,
    fetchAllData,
    clearError,
  } = useDashboardStore();

  useEffect(() => {
    fetchAllData();
  }, [fetchAllData]);

  const isLoading = 
    isLoadingMetrics || 
    isLoadingRevenue || 
    isLoadingCustomerSatisfaction || 
    isLoadingVisitorInsights || 
    isLoadingTopProducts;

  return {
    data: {
      metrics,
      revenue,
      customerSatisfaction,
      visitorInsights,
      topProducts,
    },
    isLoading,
    error,
    clearError,
    refetch: fetchAllData,
  };
};
