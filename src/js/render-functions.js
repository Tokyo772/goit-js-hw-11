function createMarkup(arr) {
  return arr
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => `<li class="item">
      <a href="${largeImageURL}"><img src="${webformatURL}" alt="${tags}" class="image" /></a>
      <div class="content">
        <div>
          <h2 class="content-text">Likes</h2>
          <p class="number-text">${likes}</p>
        </div>
        <div>
          <h2 class="content-text">Views</h2>
          <p class="number-text">${views}</p>
        </div>
        <div>
          <h2 class="content-text">Comments</h2>
          <p class="number-text">${comments}</p>
        </div>
        <div>
          <h2 class="content-text">Downloads</h2>
          <p class="number-text">${downloads}</p>
        </div>
      </div>
    </li>`
    )
    .join('');
}

export { createMarkup };
