---
name: knowstack
description: Build and work with AI-powered knowledge systems that ingest, organize, retrieve, and reason over information from documents, web content, YouTube content, and other sources using search, embeddings, RAG, agents, and citations. Use this skill whenever work involves knowledge bases, document ingestion, retrieval, RAG, source citations, AI agents, or multi-source knowledge systems.
---

# KnowStack Skill

## Purpose

Use this skill to design and implement AI-powered knowledge systems that turn external information into searchable, traceable, and useful knowledge.

## Use this skill when

- Building a knowledge base
- Ingesting documents
- Processing web pages
- Processing YouTube videos/transcripts
- Chunking and indexing content
- Generating embeddings
- Implementing semantic or hybrid search
- Building RAG pipelines
- Building source-aware AI answers
- Adding citations or source previews
- Building AI agents over a knowledge base
- Designing retrieval pipelines
- Debugging retrieval quality
- Managing source metadata

## Core pipeline

Prefer a clear pipeline:

1. Source discovery
2. Source acquisition
3. Content extraction
4. Normalization
5. Chunking
6. Metadata enrichment
7. Embedding/indexing
8. Retrieval
9. Reranking when useful
10. Context construction
11. LLM generation
12. Citation/source attribution
13. Evaluation and feedback

## Source integrity

Every important piece of retrieved information should retain provenance such as:

- Source ID
- Source URL when applicable
- Document ID
- Chunk ID
- Title
- Author/publisher when available
- Published/updated date when available
- Retrieval metadata

Do not discard provenance during chunking or retrieval.

## Retrieval principles

Use the simplest retrieval architecture that satisfies the quality requirement.

Consider:

- Keyword search
- Semantic/vector search
- Hybrid search
- Metadata filters
- Reranking
- Query expansion
- Multiple retrieval passes

Evaluate retrieval separately from generation.

## RAG principles

The model should answer from retrieved context when the system requires grounded answers.

Prefer:

- Relevant context
- Small, focused chunks
- Source attribution
- Clear uncertainty
- Explicit handling of insufficient evidence

Avoid:

- Blindly stuffing large amounts of context
- Treating retrieval as automatically correct
- Fabricating citations
- Mixing unsupported model knowledge with retrieved facts without disclosure

## Agent principles

When using an agent:

- Give tools narrow responsibilities.
- Validate tool inputs.
- Preserve source provenance.
- Limit unnecessary tool calls.
- Keep retrieval and reasoning observable.
- Define clear stopping conditions.
- Handle failures without silently inventing results.

## Evaluation

Measure:

- Retrieval relevance
- Recall
- Citation correctness
- Answer faithfulness
- Latency
- Token/context usage
- Failure rate

## Output expectations

When modifying KnowStack:

- Preserve source traceability.
- Explain ingestion/retrieval changes.
- Consider indexing and reprocessing requirements.
- Identify performance and cost implications.
- Include failure and empty-result handling.
