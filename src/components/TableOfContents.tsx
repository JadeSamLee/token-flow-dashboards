
import { Link } from "react-router-dom";

interface TableOfContentsProps {
  items: {
    id: string;
    label: string;
    active?: boolean;
  }[];
}

const TableOfContents = ({ items }: TableOfContentsProps) => {
  return (
    <div className="hidden xl:block w-64 border-l border-tdp-light-gray p-4">
      <h3 className="font-semibold text-tdp-dark-gray mb-4">Contents</h3>
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item.id}>
            <Link
              to={`#${item.id}`}
              className={`block py-1.5 px-3 rounded transition-colors ${
                item.active
                  ? "text-tdp-red font-medium"
                  : "text-tdp-dark-gray hover:text-tdp-red"
              }`}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TableOfContents;
