from fastapi import FastAPI, Form
from fastapi.middleware.cors import CORSMiddleware
from collections import defaultdict, deque
import json

app = FastAPI()

# Enable CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Frontend origin
    allow_methods=["*"],
    allow_headers=["*"],
)

def is_dag(nodes, edges):
    # Use Kahn's algorithm to determine whether cycle is there
    graph = defaultdict(list) # adjacency list
    in_degree = defaultdict(int) # indegree for each node

    # Build graph
    for edge in edges:
        src = edge['source']
        tgt = edge['target']
        graph[src].append(tgt)
        in_degree[tgt] += 1

    # Insert Nodes with no incoming edges (0 indegree)
    queue = deque([node['id'] for node in nodes if in_degree[node['id']] == 0])
    visited_count = 0

    while queue:
        current = queue.popleft()
        visited_count += 1
        for neighbor in graph[current]:
            in_degree[neighbor] -= 1
            
            if in_degree[neighbor] == 0:
                queue.append(neighbor)

    return visited_count == len(nodes)

@app.get('/')
def read_root():
    return {'Ping': 'Pong'}

@app.post('/pipelines/parse')
def parse_pipeline(pipeline: str = Form(...)):
    data = json.loads(pipeline)
    nodes = data.get("nodes", [])
    edges = data.get("edges", [])
    
    num_nodes = len(nodes)
    num_edges = len(edges)

    return {
        "num_nodes": num_nodes,
        "num_edges": num_edges,
        "is_dag": is_dag(nodes, edges)
    }


