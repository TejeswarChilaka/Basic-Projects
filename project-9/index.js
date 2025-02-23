const tagsElements = document.getElementById("tags");
const textArea = document.getElementById("textarea");

const createTags = (input) => {
  const tags = input
    .split(" ")
    .filter((tag) =>   
      tag.trim() !== ""
    )
    .map((tag) => tag.trim());

  tagsElements.innerHTML = "";

  tags.forEach((tag) => {
    const tagElement = document.createElement("span");
    tagElement.classList.add("tag");
    tagElement.textContent = tag;
    tagsElements.appendChild(tagElement);
  });
};

const pickRandomTag = () => {
  const tags = document.querySelectorAll(".tag");
  return tags[Math.floor(Math.random() * tags.length)];
};

const highlightTag = (tag) => tag.classList.add("highlight");
const unHighlightTag = (tag) => tag.classList.remove("highlight");

const randomSelect = () => {
  const times = 20;
  const interval = setInterval(() => {
    const randomTag = pickRandomTag();
    highlightTag(randomTag);
    setTimeout(() => {
      unHighlightTag(randomTag);
    }, 100);
  }, 100);

  setTimeout(() => {
    clearInterval(interval);
    setTimeout(() => {
      const randomTag = pickRandomTag();
      highlightTag(randomTag);
    }, 100);
  }, times * 100);
};

textArea.focus();

textArea.addEventListener("keyup", (e) => {
  createTags(e.target.value);
  if (e.key === "Enter") {
    setTimeout(() => (e.target.value = ""), 10);
    randomSelect();
  }
});
