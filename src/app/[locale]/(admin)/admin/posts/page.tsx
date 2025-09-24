import { Header, Main, MainHeader } from "@/blocks/dashboard";
import { TableCard } from "@/blocks/table";
import { type Table } from "@/types/blocks/table";
import { getUserInfo } from "@/services/user";
import { getPosts, getPostsCount, Post } from "@/services/post";
import { PostType } from "@/services/post";
import { Button } from "@/types/blocks/common";
import { getTaxonomies, TaxonomyType } from "@/services/taxonomy";

export default async function PostsPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: number; pageSize?: number }>;
}) {
  const { page: pageNum, pageSize } = await searchParams;
  const page = pageNum || 1;
  const limit = pageSize || 30;

  const user = await getUserInfo();
  if (!user) {
    return "no auth";
  }

  const total = await getPostsCount({
    type: PostType.ARTICLE,
  });

  const posts = await getPosts({
    type: PostType.ARTICLE,
    page,
    limit,
  });

  const table: Table = {
    columns: [
      { name: "title", title: "Title" },
      { name: "description", title: "Description" },
      {
        name: "categories",
        title: "Categories",
        callback: async (item: Post) => {
          if (!item.categories) {
            return "-";
          }
          const categoriesIds = item.categories.split(",");
          const categories = await getTaxonomies({
            ids: categoriesIds,
          });
          if (!categories) {
            return "-";
          }

          const categoriesNames = categories.map((category) => {
            return category.title;
          });

          return categoriesNames.join(", ");
        },
      },
      { name: "createdAt", title: "Created At", type: "time" },
      {
        name: "action",
        title: "",
        type: "dropdown",
        callback: (item: Post) => {
          return [
            {
              name: "edit",
              title: "Edit",
              icon: "RiEditLine",
              url: `/admin/posts/${item.id}/edit`,
            },
            {
              name: "view",
              title: "View",
              icon: "RiEyeLine",
              url: `/blog/${item.slug}`,
              target: "_blank",
            },
          ];
        },
      },
    ],
    data: posts,
    pagination: {
      total,
      page,
      limit,
    },
  };

  const actions: Button[] = [
    {
      id: "add",
      title: "Add Post",
      icon: "RiAddLine",
      url: "/admin/posts/add",
    },
  ];

  return (
    <>
      <Header />
      <Main>
        <MainHeader title="Posts" actions={actions} />
        <TableCard table={table} />
      </Main>
    </>
  );
}
