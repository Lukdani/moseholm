export const createElement = (type, classes, id) => {
    const element = document.createElement(type);

    if (classes?.length > 0) {
        classes.forEach(classItem => {
            element.classList.add(classItem)
        })
    }

    if (id) {
        element.id = id;
    }

    return element;
}