/*
 * @Author: deep moon
 * @Date: 2021-09-05 21:05:47
 * @LastEditTime: 2021-09-05 23:42:10
 * @LastEditors: deep moon
 * @Description:
 * @FilePath: \security-intelligence-nlp-client\src\components\RichTable\index.tsx
 */
/*
 * @Author: deep moon
 * @Date: 2021-09-04 15:36:05
 * @LastEditTime: 2021-09-05 00:21:41
 * @LastEditors: deep moon
 * @Description:
 * @FilePath: \security-intelligence-nlp-client\src\views\pages\Analysis\components\NumberList\index.tsx
 */
import React, {
  useState,
  useEffect,
  BaseSyntheticEvent,
  MouseEvent,
} from "react";
import { Empty, Spin, Divider } from "antd";
import { TableProps } from "./interface";
import "./index.scss";
const RichTable: React.FC<TableProps<any>> = (props) => {
  const {
    columns,
    dataSource,
    loading,
    paging: { type = "pagination", total, pageNum, pageSize = 20, onchange },
    onRow,
  } = props;
  const [hasMore, setHasMore] = useState<boolean>(true);

  const scrollToBottom = (e: BaseSyntheticEvent) => {
    const target: HTMLElement = e.target;
    const clientHeight = target.clientHeight;
    const scrollTop = target.scrollTop;
    const scrollHeight = target.scrollHeight;
    console.log(clientHeight, scrollTop, scrollHeight);
    // 到达底部
    if (clientHeight + Math.round(scrollTop) >= scrollHeight) {
      if (Math.ceil(total / 20) === pageNum) {
        setHasMore(false);
      } else {
        onchange && onchange(pageNum + 1);
      }
    }
  };
  console.log("dataSource", dataSource);
  return (
    <Spin spinning={loading} tip={"加载中..."}>
      <div
        className={"rich-table rich-table-bordered"}
        onScroll={(e: BaseSyntheticEvent) => {
          type === "scroll" && scrollToBottom(e);
        }}
      >
        <div className={"rich-table-header"}>
          {columns.map((item, index) => {
            const width = item.width ? { width: item.width } : { flex: 1 };
            const aligns = item.align
              ? { textAlign: item.align }
              : { textAlign: "left" };
            const thStyles: any = {
              ...width,
              ...aligns,
              padding: "0 4px",
              borderLeft: index > 0 ? "1px solid rgba(0, 0, 0, 0.1)" : "none",
            };
            return (
              <div style={thStyles} key={item.key}>
                {item.title}
              </div>
            );
          })}
        </div>
        <div className={"rich-table-body"}>
          {dataSource.map((record: any, recordIndex: number) => (
            <div
              className={"rich-table-row"}
              key={`richRow-${recordIndex}`}
              // 鼠标点击行
              onClick={(event: MouseEvent) => {
                // 绑定事件
                if (onRow) {
                  const res = onRow(record, recordIndex);
                  if (res) {
                    if (res.onClick) {
                      res.onClick(event);
                    }
                  }
                }
              }}
              // 鼠标移入行
              onMouseEnter={(event: MouseEvent) => {
                // 绑定事件
                if (onRow) {
                  const res = onRow(record, recordIndex);
                  if (res) {
                    if (res.onMouseEnter) {
                      res.onMouseEnter(event);
                    }
                  }
                }
              }}
              // 鼠标移出行
              onMouseLeave={(event) => {
                // 绑定事件
                if (onRow) {
                  const res = onRow(record, recordIndex);
                  if (res) {
                    if (res.onMouseLeave) {
                      res.onMouseLeave(event);
                    }
                  }
                }
              }}
            >
              {columns.map((header, headerIndex) => {
                const width = header.width
                  ? { width: header.width }
                  : { flex: 1 };
                const aligns = header.align
                  ? { textAlign: header.align }
                  : { textAlign: "left" };
                const tdStyles: any = {
                  ...width,
                  ...aligns,
                  padding: "0 4px",
                  borderLeft:
                    headerIndex > 0 ? "1px solid rgba(0, 0, 0, 0.1)" : "none",
                };
                return (
                  <div
                    style={tdStyles}
                    className={header.className ? header.className : ""}
                    key={`${recordIndex}-${header.key || header.dataIndex}`}
                  >
                    {header.render
                      ? header.render(
                          record[header.dataIndex],
                          record,
                          recordIndex
                        )
                      : record[header.dataIndex]}
                  </div>
                );
              })}
            </div>
          ))}
          {dataSource.length === 0 && <Empty style={{ marginTop: 10 }}></Empty>}
          {!hasMore && (
            <Divider className={"rich-hasNoMore"}>没有更多了</Divider>
          )}
        </div>
      </div>
    </Spin>
  );
};
export default RichTable;
