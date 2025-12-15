---
marp: true
theme: default
---
<!-- Slides based on https://developers.google.com/machine-learning/intro-to-ml. Images are not working in this edition. -->

# Introduction to Machine Learning

![Image of a robot learning](https://developers.google.com/machine-learning/intro-to-ml/images/landing-hero.svg)

<!--
Welcome to the Introduction to Machine Learning course. This course provides a quick overview of machine learning, covering its different types, key concepts of supervised machine learning, and how ML problem-solving differs from traditional programming.
-->

---

## What is Machine Learning?

*   A program or system that builds (trains) a predictive model from input data.
*   Uses the model to make useful predictions from new, never-before-seen data.

![Diagram showing ML model training and prediction](https://developers.google.com/static/machine-learning/intro-to-ml/images/definition-of-machine-learning.svg)

<!--
Machine learning is a field of artificial intelligence where computers learn to make predictions or decisions without being explicitly programmed. The system learns from data, identifies patterns, and makes decisions with minimal human intervention. The core idea is to build a model that can understand the underlying structure of the data and then use that understanding to predict outcomes for new data.
-->

---

## Types of Machine Learning Systems

*   **Supervised learning:** The model learns from data that contains both the features and the correct answers (labels).
*   **Unsupervised learning:** The model learns from data without any labels, identifying patterns and structures on its own.
*   **Reinforcement learning:** The model learns by interacting with an environment, receiving rewards or penalties for its actions.
*   **Generative AI:** A class of models that can create new content, such as images, text, or music.

<!--
These are the primary categories of machine learning. Supervised learning is the most common and is used for tasks like classification and regression. Unsupervised learning is useful for clustering data into groups or reducing dimensionality. Reinforcement learning is often used in robotics and game playing. Generative AI has gained a lot of attention for its ability to produce highly creative and realistic outputs.
-->

---

## Supervised Learning: Key Concepts

*   **Label:** The "answer" or result we want to predict (e.g., `is_spam`).
*   **Features:** The input variables used to make predictions (e.g., `email_subject`, `sender`).
*   **Model:** The mathematical representation of the learned patterns. It defines the relationship between features and the label.
*   **Training:** The process of feeding the model labeled data to help it learn the relationship between features and labels.
*   **Inference:** The process of using the trained model to make predictions on new, unlabeled data.

![Diagram showing the relationship between features, label, and model](https://developers.google.com/static/machine-learning/intro-to-ml/images/supervised-learning.svg)

<!--
In supervised learning, the goal is to create a model that can accurately predict the label for a given set of features. The model is trained on a dataset where we already know the correct labels. For example, to predict if an email is spam, the features could be the words in the email, the sender's address, etc., and the label would be whether the email is indeed spam or not. After training, the model can infer the label for new, unseen emails.
-->

---

## Traditional vs. ML Programming

**Traditional Programming:**
*   Focus is on code.
*   You write explicit rules and logic.

**Machine Learning:**
*   Focus is on data.
*   The model learns the rules from the data.

![Comparison of Traditional and ML approaches](https://developers.google.com/static/machine-learning/intro-to-ml/images/traditional-programming-vs-ml.svg)

<!--
In traditional programming, a developer writes explicit, step-by-step instructions for the computer to follow. The logic is hard-coded. In machine learning, instead of writing the rules, you provide data, and the machine learning algorithm identifies the patterns and rules on its own. This is particularly powerful for complex problems where writing the rules by hand would be difficult or impossible.
-->

---

## Summary

*   ML builds predictive models from data.
*   Major types include supervised, unsupervised, and reinforcement learning.
*   Supervised learning uses labeled data (features + labels) for training.
*   ML shifts the focus from writing explicit code to providing data.

<!--
This concludes our brief introduction to machine learning. You should now have a basic understanding of what machine learning is, the different types of systems, the core terminology of supervised learning, and how the machine learning approach differs from traditional software development.
-->
