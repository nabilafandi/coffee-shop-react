const posts = [
  {
    id: 1,
    title: "Boost your conversion rate",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Marketing", href: "#" },
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  // More posts...
];
function Promo() {
  return (
    <>
      <div className="bg-gray-50 text-center flex items-center justify-center h-64">
        <p className="text-3xl">Banner isinya promo</p>
      </div>
      <div className="flex flex-row justify-center gap-9 p-8 ">
        <div className="flex flex-col rounded overflow-hidden shadow-lg ">
          <img
            className="w-72 h-72 object-cover"
            src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt="Card image"
          />
          <div className="w-72 ">
            <h2 className=" text-x1l font-semibold mb-2">title</h2>
            <div>
              Penjelasan Promo alalalalallalalallala lalalala alalallalalala
              alalallala
            </div>
          </div>
        </div>
        <div className="flex flex-col rounded overflow-hidden shadow-lg ">
          <img
            className="w-72 h-72 object-cover"
            src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt="Card image"
          />
          <div className="w-72 ">
            <h2 className=" text-x1l font-semibold mb-2">title</h2>
            <div>
              Penjelasan Promo alalalalallalalallala lalalala alalallalalala
              alalallala
            </div>
          </div>
        </div>
        <div className="flex flex-col rounded overflow-hidden shadow-lg ">
          <img
            className="w-72 h-72 object-cover"
            src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt="Card image"
          />
          <div className="w-72 ">
            <h2 className=" text-x1l font-semibold mb-2">title</h2>
            <div>
              Penjelasan Promo alalalalallalalallala lalalala alalallalalala
              alalallala
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Promo;
