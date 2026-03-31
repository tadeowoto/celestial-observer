"use client";
import { useForm } from "react-hook-form";

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
          {...register("title", { required: true })}
          type="text"
          placeholder="Celestial Event Name"
          className="bg-transparent border-b border-outline-variant py-2 text-on-surface focus:outline-none focus:border-primary transition-colors placeholder:text-on-surface-variant/20"
        />
        {errors.title && (
          <span className="text-red-500 text-sm mt-1">Title is required.</span>
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
            {...register("imageUrl", { required: true })}
            type="text"
            placeholder="https://nasa.gov/capture..."
            className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg py-4 px-12 text-on-surface focus:outline-none focus:border-primary/50 transition-colors placeholder:text-on-surface-variant/20"
          />
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant/40">
            ▧
          </span>
        </div>
        {errors.imageUrl && (
          <span className="text-red-500 text-sm mt-1">
            Image URL is required.
          </span>
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
            <span className="text-red-500 text-sm mt-1">
              Celestial Body is required.
            </span>
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
            <span className="text-red-500 text-sm mt-1">
              Equipment is required.
            </span>
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
            <span className="text-red-500 text-sm mt-1">
              Created At is required.
            </span>
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
          <span className="text-red-500 text-sm mt-1">
            Description is required.
          </span>
        )}
      </div>

      <button className="w-full mb-20 py-4 mt-4 bg-linear-to-r from-primary to-on-primary-container rounded-xl text-on-primary-fixed font-display font-bold uppercase tracking-instrument shadow-ambient-glow hover:scale-[1.01] transition-transform active:scale-[0.98]">
        Publish to Archive
      </button>
    </form>
  );
}
