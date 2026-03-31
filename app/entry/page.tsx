export default function entryPage() {
  return (
    <section className="w-full min-h-screen h-fit flex flex-col items-center justify-start gap-4 p-4 bg-amber-300">
      <h1>Celestial Observer Form</h1>
      <article className="w-full min-h-screen">
        <form action="" className="flex flex-col gap-4 ">
          <label htmlFor="title">Title</label>
          <input type="text" id="title" name="title" />
          <label htmlFor="image-url">Image URL</label>
          <input type="text" id="image-url" name="image-url" />
          <div className="flex flex-col gap-4">
            <label htmlFor="celestial-body">Celestial Body</label>
            <input type="date" id="celestial-body" name="celestial-body" />
            <label htmlFor="equipment">Equipment</label>
            <input type="text" id="equipment" name="equipment" />
            <label htmlFor="location">Created At</label>
            <input type="datetime-local" id="location" name="location" />
          </div>
          <label htmlFor="description">Description</label>
          <textarea id="description" name="description" rows={5} />
          <button>Submit</button>
        </form>
      </article>
    </section>
  );
}
