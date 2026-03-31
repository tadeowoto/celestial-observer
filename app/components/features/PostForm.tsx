"use client";
import { useForm } from "react-hook-form";
import FormErrorMessage from "../ui/FormErrorMessage";

export default function PostForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  console.log(errors);

  const onSubmit = handleSubmit((data) => {
    console.log("Form Data:", data);
  });

  return (
    <form className="flex flex-col gap-8" onSubmit={onSubmit}>
      <div className="flex flex-col gap-2">
        <label
          htmlFor="title"
          className="text-label-sm uppercase tracking-widest text-on-surface-variant/50 font-bold"
        >
          Title
        </label>
        <input
          {...register("title", {
            required: {
              value: true,
              message: "Title is required.",
            },
            minLength: {
              value: 3,
              message: "Title must be at least 3 characters.",
            },
            maxLength: {
              value: 20,
              message: "Title must be at most 20 characters.",
            },
          })}
          type="text"
          placeholder="Celestial Event Name"
          className="bg-transparent border-b border-outline-variant py-2 text-on-surface focus:outline-none focus:border-primary transition-colors placeholder:text-on-surface-variant/20"
        />
        {errors.title && (
          <FormErrorMessage message={errors.title.message?.toString()} />
        )}
      </div>
      <div className="flex flex-col gap-2">
        <label
          htmlFor="image-url"
          className="text-label-sm uppercase tracking-widest text-on-surface-variant/50 font-bold"
        >
          Image URL
        </label>
        <div className="relative">
          <input
            {...register("imageUrl", {
              required: {
                value: true,
                message: "Image URL is required.",
              },
              pattern: {
                value: /^(https?:\/\/[^\s]+)$/,
                message: "Please enter a valid URL.",
              },
            })}
            type="text"
            placeholder="https://nasa.gov/capture..."
            className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg py-4 px-12 text-on-surface focus:outline-none focus:border-primary/50 transition-colors placeholder:text-on-surface-variant/20"
          />
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant/40">
            ▧
          </span>
        </div>
        {errors.imageUrl && (
          <FormErrorMessage message={errors.imageUrl.message?.toString()} />
        )}
      </div>

      <div className="bg-surface-container-low border border-outline-variant rounded-2xl p-6 flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <label
            htmlFor="celestial-body"
            className="text-label-sm uppercase tracking-widest text-on-surface-variant/50 font-bold"
          >
            Celestial Body
          </label>
          <input
            {...register("celestialBody", { required: true })}
            type="text"
            placeholder="e.g. Messier 31"
            className="bg-transparent border-b border-outline-variant py-1 text-on-surface focus:outline-none focus:border-primary transition-colors"
          />
          {errors.celestialBody && (
            <FormErrorMessage message="Celestial Body is required." />
          )}
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor="equipment"
            className="text-label-sm uppercase tracking-widest text-on-surface-variant/50 font-bold"
          >
            Equipment
          </label>
          <input
            {...register("equipment", { required: true })}
            type="text"
            placeholder="Apo-Refractor 130mm"
            className="bg-transparent border-b border-outline-variant py-1 text-on-surface focus:outline-none focus:border-primary transition-colors"
          />
          {errors.equipment && (
            <FormErrorMessage message="Equipment is required." />
          )}
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor="location"
            className="text-label-sm uppercase tracking-widest text-on-surface-variant/50 font-bold"
          >
            Created At
          </label>
          <input
            {...register("createdAt", { required: true })}
            type="datetime-local"
            className="bg-transparent border-b border-outline-variant py-1 text-on-surface focus:outline-none focus:border-primary transition-colors appearance-none"
          />
          {errors.createdAt && (
            <FormErrorMessage message="Creation date and time is required." />
          )}
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label
          htmlFor="description"
          className="text-label-sm uppercase tracking-widest text-on-surface-variant/50 font-bold"
        >
          Description
        </label>
        <textarea
          {...register("description", { required: true })}
          rows={5}
          placeholder="Detail the visual clarity, color shifts, and observed phenomena..."
          className="bg-surface-container-low border border-outline-variant rounded-lg p-4 text-on-surface focus:outline-none focus:border-primary/50 transition-colors resize-none placeholder:text-on-surface-variant/20 border-l-4 border-l-primary/40"
        />
        {errors.description && (
          <FormErrorMessage message="Description is required." />
        )}
      </div>

      <button className="w-full mb-20 py-4 mt-4 bg-linear-to-r from-primary to-on-primary-container rounded-xl text-on-primary-fixed font-display font-bold uppercase tracking-instrument shadow-ambient-glow hover:scale-[1.01] transition-transform active:scale-[0.98]">
        Publish to Archive
      </button>
    </form>
  );
}
