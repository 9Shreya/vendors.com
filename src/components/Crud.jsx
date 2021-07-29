import React from "react";
import { get, post, delet, put, getById } from "../util/CrudApi";

export const getAllMaterials = async () => {
  try {
    const url = "vendorShop";
    const res = await get(url);
    console.log(res);
    if (res.status === 200) {
      return res.data;
    } else {
      console.log(res.status);
    }
  } catch (ex) {
    console.log(ex);
  }
};
export const putAllMaterial = async (id, data) => {
  try {
    const url = "vendorShop/" + id;
    console.log(url, id);
    const res = await put(url, data);
    console.log(res);
  } catch (error) {}
};
export const getByIdCrud = async (id) => {
  try {
    const url = "vendorShop/" + id;
    const res = await getById(url);
    console.log(res.data);
    if (res.status === 200) {
      return res;
    } else {
      console.log(res.status);
    }
  } catch (ex) {
    console.log(ex);
  }
};
export const addCart = async (data) => {
  try {
    const url = "cart";
    const res = await post(url, data);

    console.log(res.data);
    if (res.status === 200) {
      return res;
    } else {
      console.log(res.status);
    }
  } catch (ex) {
    console.log(ex);
  }
};
export const getCart = async () => {
  try {
    const url = "cart";
    const res = await getById(url);
    console.log(res.data);
    if (res.status === 200) {
      return res;
    } else {
      console.log(res.status);
    }
  } catch (ex) {
    console.log(ex);
  }
};
export const deletCartItem = async (id) => {
  try {
    const url = "cart/" + id;
    console.log(url, id);
    const res = await delet(url);
    console.log(res);
  } catch (error) {}
};
export const putCart = async (id, data) => {
  try {
    const url = "cart/" + id;
    console.log(url, id);
    const res = await put(url, data);
    console.log(res);
  } catch (error) {}
};
export const addWishlist = async (data) => {
  try {
    const url = "wishlist";
    const res = await post(url, data);

    console.log(res.data);
    if (res.status === 200) {
      return res;
    } else {
      console.log(res.status);
    }
  } catch (ex) {
    console.log(ex);
  }
};
export const getWishlist = async () => {
  try {
    const url = "wishlist";
    const res = await getById(url);
    console.log(res.data);
    if (res.status === 200) {
      return res;
    } else {
      console.log(res.status);
    }
  } catch (ex) {
    console.log(ex);
  }
};
export const deletWishlistItem = async (id) => {
  try {
    const url = "wishlist/" + id;
    console.log(url, id);
    const res = await delet(url);
    console.log(res);
  } catch (error) {}
};
