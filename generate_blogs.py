import os

titles = [
    "The Future of RAG in Enterprise",
    "Understanding LLM Fine-tuning",
    "My Journey with Machine Learning",
    "Python for AI: Why it's the leader",
    "GATE for AI Engineers: Is it worth it?",
    "Top 10 AI Tools for Productivity",
    "How to build an AI Assistant from scratch",
    "The Ethics of Artificial Intelligence",
    "Data Structures for Machine Learning",
    "Prompt Engineering: A new era of coding",
    "CNNs vs Transformers: Which is better?",
    "Why BNCOT is a great place to study AI",
    "Building a Network Security Analyzer with Python",
    "How to optimize SQL queries for Big Data",
    "The role of Mathematics in Deep Learning",
    "Getting started with LangChain",
    "Vector Databases: The backbone of RAG",
    "AI in Healthcare: Saving lives with code",
    "Preparing for AWS Machine Learning Specialty",
    "The impact of Generative AI on Software Jobs"
]

template = """<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{title} | Harsh Verma</title>
    <link rel="stylesheet" href="../style.css">
    <script src="https://unpkg.com/lucide@latest"></script>
</head>
<body class="dark-mode">
    <nav class="navbar glass">
        <div class="nav-container">
            <a href="../index.html" class="nav-logo">Harsh<span class="accent-text">Verma</span></a>
            <a href="../blog.html" class="nav-link">← Back to Blog</a>
        </div>
    </nav>
    <main class="container section" style="margin-top: 100px;">
        <article class="glass" style="padding: 40px;">
            <span class="blog-date">June 2026</span>
            <h1 class="gradient-text">{title}</h1>
            <br>
            <div class="blog-post-content" style="line-height: 1.8; color: var(--text-secondary);">
                <p>Establishing a strong foundation in <strong>{title}</strong> is essential for any modern AI Engineer. In this post, we explore the core concepts, practical applications, and future trends related to this topic.</p>
                <br>
                <p>Artificial Intelligence is moving at a breakneck speed, and staying updated with {title} is no longer optional. Whether you are a student at BNCOT or a professional engineer at Google, understanding the underlying mechanics of these systems is crucial.</p>
                <br>
                <h3>Key Takeaways:</h3>
                <ul>
                    <li>Deep understanding of the theoretical framework.</li>
                    <li>Hands-on implementation strategies.</li>
                    <li>Optimizing for performance and scale.</li>
                </ul>
                <br>
                <p>As I continue my journey towards graduating in 2027 and clearing GATE, I find that topics like {title} form the bedrock of complex AI architectures. We will continue to see advancements in this field, and I am excited to be at the forefront of this innovation.</p>
            </div>
            
            <!-- AdSense Unit -->
            <div class="ad-placeholder glass" style="margin-top:40px; text-align:center; padding: 20px;">
                <p>In-Article Advertisement</p>
            </div>
        </article>
    </main>
    <script>lucide.createIcons();</script>
</body>
</html>"""

os.makedirs('blog', exist_ok=True)

for i, title in enumerate(titles):
    filename = f"blog/post-{i+1}.html"
    with open(filename, 'w', encoding='utf-8') as f:
        f.write(template.format(title=title))

print(f"Generated {len(titles)} blog posts in the blog/ directory.")
