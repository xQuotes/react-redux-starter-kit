import { Table } from 'antd';
import { ColumnProps } from 'antd/lib/table';

interface IUser {
  key: number;
  name: string;
}

const columns: ColumnProps<IUser>[] = [{
  key: 'name',
  title: 'Name',
  dataIndex: 'name',
}];

const data: IUser[] = [{
  key: 0,
  name: 'Jack',
}];

class UserTable extends Table<IUser> { }
<UserTable columns={columns} dataSource={data} />

// 使用 JSX 风格的 API
class NameColumn extends Table.Column<IUser> { }

<UserTable dataSource={data}>
  <NameColumn key="name" title="Name" dataIndex="name" />
</UserTable>