---
layout: default
---

<ul>
  {% collections.posts.resources.each do |post| %}
    <li>
      <a href="{{ post.relative_url }}">{{ post.data.title }}</a> – {{ post.data.date | date_to_string: "ordinal", "US" }}
    </li>
  {% end %}
</ul>