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
        (with {{ paper.authors }}), {{ paper.date }}, <em>{{ paper.journal }}</em>. vol.{{ paper.volume }}, pp {{ paper.pages }}
    </div>
    <div id="abstract-{{ paper.id }}" class="abstract" style="display: none;">
        {{ paper.abstract }}
    </div>
</div>
{% endfor %}

## Datasets and Replication Material

This list includes non-proprietary data (includes all data that I can distribute). Please, note that if a dataset is offered to paying institutions through a contract, I cannot distribute those data. Read the appendix of the relevant paper before contacting me with further requests.

{% for dataset in site.data.datasets %}
- Dataset and replication material for the paper **"{{ dataset.paper }}"**, *{{ dataset.journal }}* ([data download]({{ dataset.link }}))
{% endfor %}