const heartIcon = document.querySelector(".fa-heart");
const likeCount = document.querySelector("#like-count");
const videoId = heartIcon.getAttribute("data-id");
const initialLikes = heartIcon.getAttribute("data-likes");

likeCount.textContent = initialLikes;

if (initialLikes > 0) {
  heartIcon.classList.add("fas");
}

let hasLiked = false;

heartIcon.addEventListener("click", async () => {
  if (hasLiked) {
    return;
  }

  try {
    const response = await fetch(`/videos/${videoId}/like`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({}),
    });

    if (!response.ok) {
      throw new Error("Failed to update the number of likes");
    }

    const { likes } = await response.json();

    likeCount.textContent = likes;
    if (likes > initialLikes) {
      heartIcon.classList.add("fas");
      hasLiked = true;
    }
  } catch (error) {
    console.error(error);
  }
});
