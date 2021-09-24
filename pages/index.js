export default function Home() {
  return (
    <div>
      <h1>Photo Directory</h1>
      <p>
        This is an example of a Photo Directory API using the WordPress REST
        API. There are a few endpoints avaliable and listed below. Please note
        the API responses may reference endpoints that will exist in the real
        API but do not exist on this example project. The <i>only</i> endpoints
        avaliable in this project are listed below.
      </p>
      <h2>Endpoints</h2>
      <p>
        The base url for these endpoints is{" "}
        <code>https://photodir.zack.cat/api</code>, which would theoretically be
        replaced with the url of our real site (<code>mywpsite.com/photos</code>
        , for example!)
      </p>
      <ul className="endpoint-list">
        <li>
          <a href="/api/wp-json/wp/v2/photos">
            <code>/wp-json/wp/v2/photos</code>
          </a>
          <br />
          This endpoint contains the information about the underlying post, to
          which the image is attached.
        </li>
        <li>
          <a href="/api/wp-json/wp/v2/media">
            <code>/wp-json/wp/v2/media</code>
          </a>
          <br />
          This endpoint contains the information about the image files
          themselves.
        </li>
        <li>
          <a href="/api/wp-json/wp/v2/photo-categories">
            <code>/wp-json/wp/v2/photo-categories</code>
          </a>
          <br />A list of all photo categories.
        </li>
        <li>
          <a href="/api/wp-json/wp/v2/photo-tags">
            <code>/wp-json/wp/v2/photo-tags</code>
          </a>
          <br />A list of all photo tags.
        </li>
      </ul>
      <h2>Pagination</h2>
      Pagination is not set up on the mock API, but the headers for pagination
      <i>are</i> set up. The values are static though, they'll always send the
      same value regardless of the query params you send.
      <ul>
        <li>
          <code>x-wp-total</code>
        </li>
        <li>
          <code>x-wp-totalpages</code>
        </li>
      </ul>
      <p>
        You can learn more about WordPress REST API Pagination{" "}
        <a href="https://developer.wordpress.org/rest-api/using-the-rest-api/pagination/">
          here.
        </a>
      </p>
      <h2>Images</h2>
      <p>
        Images are hosted on a CDN in folders by date. For our purposes here all
        photos are dated for May of 2021 and located a mock CDN endpoint{" "}
        <code>https://photodir.zack.cat/cdn/2021/05/</code>
      </p>
    </div>
  );
}
