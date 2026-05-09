"use client";

import { useEffect, useState } from "react";

export default function CategoryForm() {
  const [form, setForm] = useState({
    name: "",
    slug: "",
    metaTitle: "",
    metaDescription: "",
  });

  const [categories, setCategories] = useState([]);

  // fetch cat
  const fetchCategories = async () => {
    try {
      const res = await fetch("/api/categories");

      const data = await res.json();

      setCategories(data);

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  // AUTO SLUG GENERATE
  const slugify = (text) => {
    return text
      .toLowerCase()
      .trim()
      .replace(/\s+/g, "-")
      .replace(/[^\w-]+/g, "");
  };

  // HANDLE NAME CHANGE
  const handleNameChange = (e) => {
    const value = e.target.value;

    setForm({
      ...form,
      name: value,
      slug: slugify(value),
    });
  };

  // SUBMIT
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/categories", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(form),
      });

      const data = await res.json();

      console.log(data);

      if (data.success) {
        alert("Category Added");

        setForm({
          name: "",
          slug: "",
          metaTitle: "",
          metaDescription: "",
        });

        fetchCategories();

      } else {
        alert(data.error);
      }

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="p-10">
      <form
        onSubmit={handleSubmit}
        className="space-y-5 max-w-2xl"
      >
        {/* CATEGORY NAME */}
        <div>
          <label className="block mb-2 font-medium">
            Category Name
          </label>

          <input
            type="text"
            placeholder="Category Name"
            className="border p-3 rounded w-full"
            value={form.name}
            onChange={handleNameChange}
          />
        </div>

        {/* SLUG */}
        <div>
          <label className="block mb-2 font-medium">
            Slug
          </label>

          <input
            type="text"
            placeholder="slug"
            className="border p-3 rounded w-full"
            value={form.slug}
            onChange={(e) =>
              setForm({
                ...form,
                slug: slugify(e.target.value),
              })
            }
          />
        </div>

        {/* META TITLE */}
        <div>
          <label className="block mb-2 font-medium">
            Meta Title
          </label>

          <input
            type="text"
            placeholder="Meta Title"
            className="border p-3 rounded w-full"
            value={form.metaTitle}
            onChange={(e) =>
              setForm({
                ...form,
                metaTitle: e.target.value,
              })
            }
          />
        </div>

        {/* META DESCRIPTION */}
        <div>
          <label className="block mb-2 font-medium">
            Meta Description
          </label>

          <textarea
            placeholder="Meta Description"
            className="border p-3 rounded w-full h-32"
            value={form.metaDescription}
            onChange={(e) =>
              setForm({
                ...form,
                metaDescription: e.target.value,
              })
            }
          />
        </div>

        {/* BUTTON */}
        <button
          type="submit"
          className="bg-black text-white px-8 py-3 rounded"
        >
          Add Category
        </button>
      </form>

<h2 className="text-3xl font-bold mt-10">All Categories</h2>

      {/* CATEGORY LIST */}
      <div className="grid grid-cols-3 gap-5 mt-10">


        {categories.map((cat) => (
          <div
            key={cat._id}
            className="border rounded-xl p-5 shadow-sm"
          >
            <h2 className="font-bold text-lg">
              {cat.name}
            </h2>

            <p className="text-sm text-gray-500 mt-1">
              {cat.slug}
            </p>

            <p className="text-sm mt-3">
              {cat.metaTitle}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}