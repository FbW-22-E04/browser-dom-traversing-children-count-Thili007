const wrapper = document.getElementById("wrapper");

// console.log(wrapper);

console.log(wrapper.children, wrapper.childElementCount);

for (let i = 0; i < wrapper.children.length; i++) {
  const el = wrapper.children[i];

  console.log(el.children, el.children.length);
}

const getElementWithMostClasses = (list) => {
  let el = null;
  let maxLength = 0;

  for (let index = 0; index < list.length; index++) {
    const element = list[index];

    if (element.classList.length > maxLength) {
      maxLength = element.classList.length;
      el = element;
    }
  }

  return {
    element: el,
    numberOfClasses: maxLength,
  };
};

console.log(getElementWithMostClasses(wrapper.children));
