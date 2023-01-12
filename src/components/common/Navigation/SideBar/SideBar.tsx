import Link from "next/link";
import { Suspense } from "react";

import { Drawer } from "@/components/common/Drawer";
import { Icon } from "@/components/common/Icon";
import { Category } from "@/components/common/Navigation/SideBar/Category";
import { SearchInput } from "@/components/search";

export const SideBar = () => {
  return (
    <Drawer>
      <Drawer.Trigger close={<Icon name="cancel" />} open={<Icon name="menu" />} />
      <Drawer.Content className="mt-50">
        <Link className="mb-8 block py-12" href="/search">
          <SearchInput placeholder="당신이 찾는 밈, 여기 있다." />
        </Link>
        <Suspense>
          <Category />
        </Suspense>
      </Drawer.Content>
    </Drawer>
  );
};