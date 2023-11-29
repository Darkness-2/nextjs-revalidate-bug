export default function Explanation() {
  return (
    <>
      <h2>Behavior when running locally via npm run build / start:</h2>
      <ul>
        <li>Open network tab and watch requests</li>
        <li>
          When using button 1, note how each rsc returned has a X-Nextjs-Cache
          header
        </li>
        <li>
          This header will be "HIT" during the 60 second revalidate window, and
          the time on the page only changes once (as the rsc and the page itself
          are different - this is expected)
        </li>
        <li>
          After 60 seconds, the header will become "STALE", and the time still
          does not change (this is expected)
        </li>
        <li>
          The next click of button 1 will return a new time from the server
        </li>
        <li>
          If button 2 is clicked, note how the next usage of button 1 will
          return a "MISS", and a new time will be returned
        </li>
      </ul>

      <h2>Behavior when deployed to Vercel:</h2>
      <ul>
        <li>Open network tab and watch requests</li>
        <li>
          When using button 1, note how each rsc returned has a X-Vercel-Cache
          header
        </li>
        <li>
          This header will be "HIT" during the 60 second revalidate window, and
          the time on the page only changes once (as the rsc and the page itself
          are different - this is expected)
        </li>
        <li>
          After 60 seconds, the header will become "STALE", and the time still
          does not change (this is expected)
        </li>
        <li>
          The next click of button 1 will return a new time from the server
        </li>
        <li>
          If button 2 is clicked, note how the next usage of button 1 will
          return a "REVALIDATED", and a new time will be returned
        </li>
        <li>
          <strong>
            However, if you try this last step enough times, eventually you will
            run into a situation where the next usage of button 1 will return a
            "HIT" - the page does not revalidate even though revalidatePath was
            called.
          </strong>
        </li>
        <li>
          From what I can tell, this happens when the you invoke revalidatePath
          very close to end of the 60 second window - it seems like the
          revalidate behavior interferes with the revalidatePath in some way
          when they are both occuring around the same time
        </li>
      </ul>
    </>
  );
}
