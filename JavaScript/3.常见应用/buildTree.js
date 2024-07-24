const tableData = [
    {
        id: 1,
        item_name: 'Item 1',
        item_type: 'Type A',
        parent_id: null,
    },
    {
        id: 2,
        item_name: 'Item 2',
        item_type: 'Type B',
        parent_id: 1,
    },
    {
        id: 3,
        item_name: 'Item 3',
        item_type: 'Type A',
        parent_id: 1,
    },
    {
        id: 4,
        item_name: 'Item 4',
        item_type: 'Type C',
        parent_id: 3,
    },
    {
        id: 5,
        item_name: 'Item 5',
        item_type: 'Type B',
        parent_id: 3,
    },
    {
        id: 6,
        item_name: 'Item 6',
        item_type: 'Type A',
        parent_id: 3,
    },
];

function buildTree(data) {
    const tree = {};
    const mapper = new Map();

    data.forEach((item) => {
        mapper.set(item.id, { ...item, children: [] });
    });

    data.forEach((item) => {
        if (item.parent_id === null) {
            tree[item.id] = mapper.get(item.id);
        } else {
            const parent = mapper.get(item.parent_id);
            if (parent) {
                parent.children.push(mapper.get(item.id));
            }
        }
    });

    return tree;
}

console.log(buildTree(tableData));
