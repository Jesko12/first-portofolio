import http from "./httpService";
import { getToken } from "./authService";

const usersEndpoint = "/admin/users";
const productsEndpoint = "/admin/products";
const productEndpoint = "/admin/product";
const ordersEndpoint = "/admin/orders";
const orderEndpoint = "/admin/order";
const findDriverEndpoint = "/admin/shipment";
const bannersEndpoint = "/admin/banners";
const bannerEndpoint = "admin/banner";

export async function getUsers() {
    return http.get(usersEndpoint, getAuthHeaders());
  }

export async function getProducts() {
    return http.get(productsEndpoint, getAuthHeaders());
  }

export async function getBanners() {
    return http.get(bannersEndpoint, getAuthHeaders());
  }

export async function getProductByID(id) {
    return await http.get(productEndpoint + `/${id}`,
      getAuthHeaders());
  }

export async function addProduct(body) {
    return await http.post(
      productEndpoint,
      body,
      getAuthHeaders());
  }

export async function addBanner(body) {
    return await http.post(
      bannerEndpoint,
      body,
      getAuthHeaders());
  }
export async function deleteProduct(id) {
    return await http.delete(
      productEndpoint + `/${id}`,
      getAuthHeaders());
  }

  async function editProduct(id, body) {
    return await http.put(
      productEndpoint + `/${id}`,
      body,
      getAuthHeaders());
  }

  export async function updateBannerStatus(id, body) {
    return await http.patch(
      bannerEndpoint + `/${id}`,
      body,
      getAuthHeaders());
  }

export async function getOrders() {
    return http.get(ordersEndpoint, getAuthHeaders());
  }

export async function getOrderByID(id) {
    return await http.get(orderEndpoint + `/${id}`,
      getAuthHeaders());
  }

export async function findDriver(id, body) {
    return await http.post(
      findDriverEndpoint + `/${id}`,
      body,
      getAuthHeaders());
  }

export function getAuthHeaders() {
    return {
      headers: {
        Authorization: "Bearer " + getToken(),
      },
    };
  }

  /* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default {
    getUsers,
    getProducts,
    getOrders,
    getOrderByID,
    addProduct,
    deleteProduct,
    editProduct,
    getProductByID,
    findDriver,
    getBanners,
    addBanner,
    updateBannerStatus,
}