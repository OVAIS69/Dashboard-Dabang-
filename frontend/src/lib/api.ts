import axios from 'axios';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3002';

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor
api.interceptors.request.use(
  (config) => {
    // Add auth token if available
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response?.status === 401) {
      // Handle unauthorized access
      localStorage.removeItem('authToken');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export interface MetricsData {
  totalSales: {
    value: string;
    change: string;
    trend: string;
  };
  totalOrders: {
    value: string;
    change: string;
    trend: string;
  };
  productsSold: {
    value: string;
    change: string;
    trend: string;
  };
  newCustomers: {
    value: string;
    change: string;
    trend: string;
  };
}

export interface RevenueData {
  onlineSales: Array<{ day: string; value: number }>;
  offlineSales: Array<{ day: string; value: number }>;
}

export interface CustomerSatisfactionData {
  lastMonth: Array<{ week: string; value: number }>;
  thisMonth: Array<{ week: string; value: number }>;
  summary: {
    lastMonthTotal: number;
    thisMonthTotal: number;
  };
}

export interface VisitorInsightsData {
  loyalCustomers: Array<{ month: string; value: number }>;
  newCustomers: Array<{ month: string; value: number }>;
  uniqueCustomers: Array<{ month: string; value: number }>;
}

export interface TopProductsData {
  products: Array<{
    id: number;
    name: string;
    popularity: number;
    sales: string;
  }>;
}

export const dashboardApi = {
  getMetrics: (): Promise<MetricsData> =>
    api.get('/api/dashboard/metrics').then((res) => res.data),

  getRevenue: (): Promise<RevenueData> =>
    api.get('/api/dashboard/revenue').then((res) => res.data),

  getCustomerSatisfaction: (): Promise<CustomerSatisfactionData> =>
    api.get('/api/dashboard/customer-satisfaction').then((res) => res.data),

  getVisitorInsights: (): Promise<VisitorInsightsData> =>
    api.get('/api/dashboard/visitor-insights').then((res) => res.data),

  getTopProducts: (): Promise<TopProductsData> =>
    api.get('/api/dashboard/top-products').then((res) => res.data),
};

export default api;
