"use client";

import { useEffect, useMemo, useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import {
  Pencil,
  Trash2,
  Plus,
  Loader2,
} from "lucide-react";

const JoditEditor = dynamic(
  () => import("jodit-react"),
  { ssr: false }
);

export default function ProductForm() {
  const [categories, setCategories] =
    useState([]);

  const [products, setProducts] =
    useState([]);

  const [loadingProducts, setLoadingProducts] =
    useState(false);

  const [editingId, setEditingId] =
    useState(null);

  const [uploading, setUploading] =
    useState(false);

  const initialForm = {
    category: "",
    slug: "",
    name: "",
    price:"",
    metaTitle: "",
    metaDescription: "",
    overview: "",
    description: "",
    specs: [
      {
        label: "",
        value: "",
      },
    ],
    images: [],
    images360: [],
  };

  const [form, setForm] =
    useState(initialForm);

  // JODIT CONFIG
  const editorConfig = useMemo(
    () => ({
      readonly: false,
      height: 500,
      placeholder:
        "Write product description...",
    }),
    []
  );

  // FETCH
  useEffect(() => {
    fetchCategories();
    fetchProducts();
  }, []);

  // FETCH CATEGORIES
  const fetchCategories = async () => {
    try {
      const res = await fetch(
        "/api/categories"
      );

      const data = await res.json();

      setCategories(data || []);
    } catch (error) {
      console.log(error);
    }
  };

  // FETCH PRODUCTS
const fetchProducts = async () => {
  try {
    const res = await fetch("/api/products");

    const data = await res.json();

    // data is array directly
    setProducts(data);

  } catch (error) {
    console.log(error);
  }
};

  // SLUGIFY
  const slugify = (text) => {
    return text
      .toLowerCase()
      .trim()
      .replace(/\s+/g, "-")
      .replace(/[^\w-]+/g, "");
  };

  // IMAGE UPLOAD
  const handleImageUpload = async (
    e
  ) => {
    try {
      setUploading(true);

      const files = Array.from(
        e.target.files
      );

      const uploadedImages = [];

      for (const file of files) {
        const formData = new FormData();

        formData.append("file", file);

        const res = await fetch(
          "/api/upload",
          {
            method: "POST",
            body: formData,
          }
        );

        const data = await res.json();

        uploadedImages.push({
          src: data.url?.trim(),
          alt:
            form.name ||
            "product-image",
        });
      }

      setForm((prev) => ({
        ...prev,
        images: [
          ...prev.images,
          ...uploadedImages,
        ],
      }));
    } catch (error) {
      console.log(error);
    } finally {
      setUploading(false);
    }
  };

  // 360 IMAGE UPLOAD
  const handle360Upload = async (
    e
  ) => {
    try {
      setUploading(true);

      const files = Array.from(
        e.target.files
      );

      const uploadedImages360 = [];

      for (const file of files) {
        const formData = new FormData();

        formData.append("file", file);

        const res = await fetch(
          "/api/upload",
          {
            method: "POST",
            body: formData,
          }
        );

        const data = await res.json();

        uploadedImages360.push(
          data.url?.trim()
        );
      }

      setForm((prev) => ({
        ...prev,
        images360: [
          ...prev.images360,
          ...uploadedImages360,
        ],
      }));
    } catch (error) {
      console.log(error);
    } finally {
      setUploading(false);
    }
  };

  // REMOVE IMAGE
  const removeImage = (index) => {
    setForm((prev) => ({
      ...prev,
      images: prev.images.filter(
        (_, i) => i !== index
      ),
    }));
  };

  // REMOVE 360 IMAGE
  const remove360Image = (
    index
  ) => {
    setForm((prev) => ({
      ...prev,
      images360:
        prev.images360.filter(
          (_, i) => i !== index
        ),
    }));
  };

  // SPEC CHANGE
  const handleSpecChange = (
    index,
    field,
    value
  ) => {
    const updatedSpecs = [
      ...form.specs,
    ];

    updatedSpecs[index][field] =
      value;

    setForm({
      ...form,
      specs: updatedSpecs,
    });
  };

  // ADD SPEC
  const addSpec = () => {
    setForm({
      ...form,
      specs: [
        ...form.specs,
        {
          label: "",
          value: "",
        },
      ],
    });
  };

  // REMOVE SPEC
  const removeSpec = (index) => {
    setForm({
      ...form,
      specs: form.specs.filter(
        (_, i) => i !== index
      ),
    });
  };

  // EDIT PRODUCT
  const handleEdit = (product) => {
    setEditingId(product._id);

    setForm({
      category:
        product.category?._id ||
        product.category ||
        "",

      slug: product.slug || "",

      name: product.name || "",

   price: product.price || "",

      metaTitle:
        product.metaTitle || "",

      metaDescription:
        product.metaDescription ||
        "",

      overview:
        product.overview || "",

      description:
        product.description || "",

      specs:
        product.specs?.length > 0
          ? product.specs
          : [
              {
                label: "",
                value: "",
              },
            ],

      images: product.images || [],

      images360:
        product.images360 || [],
    });

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // DELETE PRODUCT
  const handleDelete = async (
    id
  ) => {
    const confirmDelete = confirm(
      "Delete this product?"
    );

    if (!confirmDelete) return;

    try {
      const res = await fetch(
        `/api/products/${id}`,
        {
          method: "DELETE",
        }
      );

      const data = await res.json();

      if (data.success) {
        alert("Deleted");

        fetchProducts();
      }
    } catch (error) {
      console.log(error);
    }
  };

  // SUBMIT
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const url = editingId
        ? `/api/products/${editingId}`
        : "/api/products";

      const method = editingId
        ? "PUT"
        : "POST";

      const response = await fetch(
        url,
        {
          method,

          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify(form),
        }
      );

      const data =
        await response.json();

      if (data.success) {
        alert(
          editingId
            ? "Product Updated"
            : "Product Added"
        );

        setForm(initialForm);

        setEditingId(null);

        fetchProducts();
      } else {
        alert(
          data.error ||
            "Something went wrong"
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-6 md:p-10">

      {/* HEADER */}
      <div className="mb-10">
        <h1 className="text-4xl font-bold">
          {editingId
            ? "Edit Product"
            : "Add Product"}
        </h1>

        <p className="text-gray-500 mt-2">
          Manage products with SEO,
          images, specs & 360
          gallery
        </p>
      </div>

      {/* FORM */}
      <form
        onSubmit={handleSubmit}
        className="space-y-8 bg-white border rounded-3xl p-6 md:p-10"
      >

        {/* CATEGORY */}
        <div>
          <label className="block mb-2 font-semibold">
            Category
          </label>

          <select
            className="border p-4 w-full rounded-xl"
            value={form.category}
            onChange={(e) =>
              setForm({
                ...form,
                category:
                  e.target.value,
              })
            }
            required
          >
            <option value="">
              Select Category
            </option>

            {categories.map((cat) => (
              <option
                key={cat._id}
                value={cat._id}
              >
                {cat.name}
              </option>
            ))}
          </select>
        </div>

        {/* PRODUCT NAME */}
        <div>
          <label className="block mb-2 font-semibold">
            Product Name
          </label>

          <input
            type="text"
            placeholder="Product Name"
            className="border p-4 w-full rounded-xl"
            value={form.name}
            onChange={(e) =>
              setForm({
                ...form,
                name: e.target.value,
                slug: slugify(
                  e.target.value
                ),
              })
            }
            required
          />
        </div>




        {/* prod price */}

  <div>
          <label className="block mb-2 font-semibold">
            Product Price
          </label>

          <input
            type="text"
            placeholder="Product Price"
            className="border p-4 w-full rounded-xl"
            value={form.price}
            onChange={(e) =>
              setForm({
                ...form,
                price: e.target.value,
              
              })
            }
            required
          />
        </div>



        {/* SLUG */}
        <div>
          <label className="block mb-2 font-semibold">
            Product Slug
          </label>

          <input
            type="text"
            placeholder="product-slug"
            className="border p-4 w-full rounded-xl"
            value={form.slug}
            onChange={(e) =>
              setForm({
                ...form,
                slug: slugify(
                  e.target.value
                ),
              })
            }
            required
          />
        </div>

        {/* META TITLE */}
        <div>
          <label className="block mb-2 font-semibold">
            Meta Title
          </label>

          <input
            type="text"
            placeholder="SEO Meta Title"
            className="border p-4 w-full rounded-xl"
            value={form.metaTitle}
            onChange={(e) =>
              setForm({
                ...form,
                metaTitle:
                  e.target.value,
              })
            }
          />
        </div>

        {/* META DESCRIPTION */}
        <div>
          <label className="block mb-2 font-semibold">
            Meta Description
          </label>

          <textarea
            placeholder="SEO Meta Description"
            className="border p-4 w-full rounded-xl h-32"
            value={
              form.metaDescription
            }
            onChange={(e) =>
              setForm({
                ...form,
                metaDescription:
                  e.target.value,
              })
            }
          />
        </div>

        {/* OVERVIEW */}
        <div>
          <label className="block mb-2 font-semibold">
            Product Overview
          </label>

          <textarea
            placeholder="Short overview"
            className="border p-4 w-full rounded-xl h-32"
            value={form.overview}
            onChange={(e) =>
              setForm({
                ...form,
                overview:
                  e.target.value,
              })
            }
          />
        </div>

        {/* DESCRIPTION */}
        <div>
          <label className="block mb-3 font-semibold">
            Product Description
          </label>

          <div className="border rounded-xl overflow-hidden">
            <JoditEditor
              value={form.description}
              config={editorConfig}
              onBlur={(newContent) =>
                setForm({
                  ...form,
                  description:
                    newContent,
                })
              }
            />
          </div>
        </div>

        {/* SPECS */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <label className="font-semibold text-lg">
              Specifications
            </label>

            <button
              type="button"
              onClick={addSpec}
              className="bg-black text-white px-4 py-2 rounded-xl flex items-center gap-2"
            >
              <Plus size={16} />
              Add Spec
            </button>
          </div>

          <div className="space-y-4">
            {form.specs.map(
              (spec, index) => (
                <div
                  key={index}
                  className="grid md:grid-cols-2 gap-4 border p-4 rounded-2xl"
                >
                  <input
                    type="text"
                    placeholder="Label"
                    className="border p-3 rounded-xl"
                    value={spec.label}
                    onChange={(e) =>
                      handleSpecChange(
                        index,
                        "label",
                        e.target.value
                      )
                    }
                  />

                  <div className="flex gap-3">
                    <input
                      type="text"
                      placeholder="Value"
                      className="border p-3 rounded-xl w-full"
                      value={
                        spec.value
                      }
                      onChange={(e) =>
                        handleSpecChange(
                          index,
                          "value",
                          e.target.value
                        )
                      }
                    />

                    <button
                      type="button"
                      onClick={() =>
                        removeSpec(
                          index
                        )
                      }
                      className="bg-red-500 text-white px-4 rounded-xl"
                    >
                      X
                    </button>
                  </div>
                </div>
              )
            )}
          </div>
        </div>

        {/* PRODUCT IMAGES */}
        <div>
          <label className="block mb-2 font-semibold">
            Upload Product Images
          </label>

          <input
            type="file"
            multiple
            onChange={
              handleImageUpload
            }
          />

          {uploading && (
            <p className="text-blue-600 mt-2 flex items-center gap-2">
              <Loader2 className="animate-spin" size={18} />
              Uploading...
            </p>
          )}

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-5">
            {form.images.map(
              (img, i) => (
                <div
                  key={i}
                  className="relative border rounded-2xl overflow-hidden"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={300}
                    height={300}
                    className="w-full h-40 object-cover"
                    unoptimized
                  />

                  <button
                    type="button"
                    onClick={() =>
                      removeImage(i)
                    }
                    className="absolute top-2 right-2 bg-red-500 text-white w-7 h-7 rounded-full"
                  >
                    ×
                  </button>
                </div>
              )
            )}
          </div>
        </div>

        {/* 360 IMAGES */}
        <div>
          <label className="block mb-2 font-semibold">
            Upload 360° Images
          </label>

          <input
            type="file"
            multiple
            onChange={
              handle360Upload
            }
          />

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-5">
            {form.images360.map(
              (img, i) => (
                <div
                  key={i}
                  className="relative border rounded-2xl overflow-hidden"
                >
                  <Image
                    src={img}
                    alt={`360-${i}`}
                    width={300}
                    height={300}
                    className="w-full h-32 object-cover"
                    unoptimized
                  />

                  <button
                    type="button"
                    onClick={() =>
                      remove360Image(
                        i
                      )
                    }
                    className="absolute top-2 right-2 bg-red-500 text-white w-7 h-7 rounded-full"
                  >
                    ×
                  </button>
                </div>
              )
            )}
          </div>
        </div>

        {/* SUBMIT */}
        <button
          type="submit"
          className="bg-black text-white px-10 py-4 rounded-2xl text-lg font-semibold"
        >
          {editingId
            ? "Update Product"
            : "Add Product"}
        </button>
      </form>

      {/* PRODUCTS LIST */}
      <div className="mt-20">

        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold">
            All Products
          </h2>

          <p className="text-gray-500">
            {products.length} Products
          </p>
        </div>

        {loadingProducts ? (
          <div className="flex justify-center py-20">
            <Loader2 className="animate-spin" />
          </div>
        ) : (
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">

            {products.map((product) => (
              <div
                key={product._id}
                className="border rounded-3xl overflow-hidden bg-white"
              >

                {/* IMAGE */}
                <div className="relative h-64">
                  <Image
                    src={
                      product.images?.[0]
                        ?.src ||
                      "/placeholder.png"
                    }
                    alt={product.name}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>

                {/* CONTENT */}
                <div className="p-5">

                  <p className="text-sm text-orange-500 font-medium">
                    {
                      product.category
                        ?.name
                    }
                  </p>

                  <h3 className="text-xl font-bold mt-2 line-clamp-1">
                    {product.name}
                  </h3>

                  <p className="text-gray-600 text-sm mt-3 line-clamp-3">
                    {
                      product.overview
                    }
                  </p>

                  {/* ACTIONS */}
                  <div className="flex gap-3 mt-6">

                    <button
                      onClick={() =>
                        handleEdit(
                          product
                        )
                      }
                      className="flex-1 bg-black text-white py-3 rounded-xl flex items-center justify-center gap-2"
                    >
                      <Pencil size={16} />
                      Edit
                    </button>

                    <button
                      onClick={() =>
                        handleDelete(
                          product._id
                        )
                      }
                      className="flex-1 bg-red-500 text-white py-3 rounded-xl flex items-center justify-center gap-2"
                    >
                      <Trash2 size={16} />
                      Delete
                    </button>

                  </div>
                </div>
              </div>
            ))}

          </div>
        )}
      </div>
    </div>
  );
}