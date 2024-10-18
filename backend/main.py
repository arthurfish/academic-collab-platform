import csv
import ast
from fastapi import FastAPI
from fastapi.responses import JSONResponse

app = FastAPI()

from fastapi import FastAPI
from starlette.middleware.cors import CORSMiddleware

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5174"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
@app.get("/api/professor-search")
async def search_professors(keyword: str):
    results = []
    if keyword == "":
        return JSONResponse({"results": results})

    with open('professors.csv', 'r', encoding='utf-8') as file:
        reader = csv.reader(file)
        for row in reader:
            if len(row) < 3:
                continue  # 跳过格式不正确的行
            title, year, authors_str = row[0], row[1], row[2]
            try:
                authors = ast.literal_eval(authors_str)  # 将字符串转换为列表
            except:
                continue  # 如果转换失败，跳过此行

            # 在标题或作者中搜索关键词
            if (keyword.lower() in title.lower() or
                    any(keyword.lower() in author.lower() for author in authors)):
                results.append({
                    "title": title,
                    "year": year,
                    "authors": authors
                })

            if len(results) >= 20:
                break

    print(results[:20])
    return JSONResponse(content=results[:20])