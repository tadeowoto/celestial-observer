export default function PostForm() {
  return (
    <form className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <label
          htmlFor="title"
          className="text-label-sm uppercase tracking-widest text-on-surface-variant/50 font-bold"
        >
          Title
        </label>
        <input
          type="text"
          id="title"
          name="title"
          placeholder="Celestial Event Name"
          className="bg-transparent border-b border-outline-variant py-2 text-on-surface focus:outline-none focus:border-primary transition-colors placeholder:text-on-surface-variant/20"
        />
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
            type="text"
            id="image-url"
            name="image-url"
            placeholder="https://nasa.gov/capture..."
            className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg py-4 px-12 text-on-surface focus:outline-none focus:border-primary/50 transition-colors placeholder:text-on-surface-variant/20"
          />
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant/40">
            ▧
          </span>
        </div>
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
            type="text"
            id="celestial-body"
            name="celestial-body"
            placeholder="e.g. Messier 31"
            className="bg-transparent border-b border-outline-variant py-1 text-on-surface focus:outline-none focus:border-primary transition-colors"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor="equipment"
            className="text-label-sm uppercase tracking-widest text-on-surface-variant/50 font-bold"
          >
            Equipment
          </label>
          <input
            type="text"
            id="equipment"
            name="equipment"
            placeholder="Apo-Refractor 130mm"
            className="bg-transparent border-b border-outline-variant py-1 text-on-surface focus:outline-none focus:border-primary transition-colors"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor="location"
            className="text-label-sm uppercase tracking-widest text-on-surface-variant/50 font-bold"
          >
            Created At
          </label>
          <input
            type="datetime-local"
            id="location"
            name="location"
            className="bg-transparent border-b border-outline-variant py-1 text-on-surface focus:outline-none focus:border-primary transition-colors appearance-none"
          />
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
          id="description"
          name="description"
          rows={5}
          placeholder="Detail the visual clarity, color shifts, and observed phenomena..."
          className="bg-surface-container-low border border-outline-variant rounded-lg p-4 text-on-surface focus:outline-none focus:border-primary/50 transition-colors resize-none placeholder:text-on-surface-variant/20 border-l-4 border-l-primary/40"
        />
      </div>

      <button className="w-full mb-20 py-4 mt-4 bg-linear-to-r from-primary to-on-primary-container rounded-xl text-on-primary-fixed font-display font-bold uppercase tracking-instrument shadow-ambient-glow hover:scale-[1.01] transition-transform active:scale-[0.98]">
        Publish to Archive
      </button>
    </form>
  );
}
