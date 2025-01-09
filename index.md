---
layout: default
title: Home
---

# Paola Sapienza

**[On Leave 2023-24: Hoover Institution, Stanford University]**  
Donald C. Clark/HSBC Chair in Consumer Finance  
Professor of [Finance](https://www.kellogg.northwestern.edu/faculty/academics/finance.aspx)  
[Kellogg School of Management](https://www.kellogg.northwestern.edu/)  
[Northwestern University](http://www.northwestern.edu)  

## Research Papers

{% for paper in site.data.papers %}
<div class="paper-entry">
    <div class="paper-title">
        {{ paper.id }}. <strong><a href="{{ paper.pdf }}">{{ paper.title }}</a></strong>
        <button onclick="toggleAbstract('{{ paper.id }}')" class="abstract-toggle">Abstract</button>
    </div>
    <div class="paper-info">
        {% if paper.authors %}(with {{ paper.authors }}){% endif %}{% if paper.date %}, {{ paper.date }}{% endif %}{% if paper.journal %}, <em>{{ paper.journal }}</em>{% endif %}{% if paper.volume %}. vol.{{ paper.volume }}{% endif %}{% if paper.pages %}, pp {{ paper.pages }}{% endif %}
    </div>
    <div id="abstract-{{ paper.id }}" class="abstract" style="display: none;">
        {{ paper.abstract }}
    </div>
</div>
{% endfor %}

## Summaries of Research

{% for summary in site.data.summaries.summaries %}
<div class="summary-entry">
    <div class="summary-title">
        <strong><a href="{{ summary.pdf }}">{{ summary.title }}</a></strong>
        {% if summary.abstract %}
        <button onclick="toggleAbstract('summary-{{ summary.id }}')" class="abstract-toggle">Abstract</button>
        {% endif %}
    </div>
    <div class="summary-info">
        {% if summary.authors %}(with {{ summary.authors }}){% endif %}{% if summary.date %}, {{ summary.date }}{% endif %}
        {% if summary.publication %}, <em>{{ summary.publication }}</em>{% endif %}
        {% if summary.editors %}edited by {{ summary.editors }}{% endif %}
        {% if summary.volume %}Volume {{ summary.volume }}{% endif %}
        {% if summary.pages %}, pp {{ summary.pages }}{% endif %}
        {% if summary.publisher %}, {{ summary.publisher }}{% endif %}
        {% if summary.doi %}(<a href="http://dx.doi.org/{{ summary.doi }}">published version</a>){% endif %}
    </div>
    {% if summary.abstract %}
    <div id="abstract-summary-{{ summary.id }}" class="abstract" style="display: none;">
        {{ summary.abstract }}
    </div>
    {% endif %}
</div>
{% endfor %}

## Other Writings

{% for writing in site.data.other_writings.other_writings %}
<div class="writing-entry">
    <div class="writing-title">
        <strong>
        {% if writing.pdf %}
            <a href="{{ writing.pdf }}">{{ writing.title }}</a>
        {% elsif writing.link %}
            <a href="{{ writing.link }}">{{ writing.title }}</a>
        {% else %}
            {{ writing.title }}
        {% endif %}
        </strong>
        {% if writing.abstract %}
        <button onclick="toggleAbstract('writing-{{ writing.id }}')" class="abstract-toggle">Abstract</button>
        {% endif %}
    </div>
    <div class="writing-info">
        {% if writing.authors %}(with {{ writing.authors }}){% endif %}
        {% if writing.date %}, {{ writing.date }}{% endif %}
        {% if writing.journal %}, <em>{{ writing.journal }}</em>{% endif %}
        {% if writing.volume %}. vol.{{ writing.volume }}{% endif %}
        {% if writing.pages %}, pp {{ writing.pages }}{% endif %}
        {% if writing.type %}, {{ writing.type }}{% endif %}
    </div>
    {% if writing.abstract %}
    <div id="abstract-writing-{{ writing.id }}" class="abstract" style="display: none;">
        {{ writing.abstract }}
    </div>
    {% endif %}
</div>
{% endfor %}

## Datasets and Replication Material

This list includes non-proprietary data (includes all data that I can distribute). Please, note that if a dataset is offered to paying institutions through a contract, I cannot distribute those data. Read the appendix of the relevant paper before contacting me with further requests.

{% for dataset in site.data.datasets.datasets %}
- Dataset and replication material for the paper **"{{ dataset.title }}"**, *{{ dataset.journal }}* ([data download]({{ dataset.link }}))
{% endfor %}