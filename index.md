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
{{ paper.id }}. [**{{ paper.title }}**]({{ paper.pdf }}) \[[<a href="javascript:void(0)" onclick="toggleAbstract('{{ paper.id }}')">Abstract</a>]\]  
   (with {{ paper.authors }}), {{ paper.date }}, *{{ paper.journal }}*. vol.{{ paper.volume }}, pp {{ paper.pages }}

<div id="abstract-{{ paper.id }}" style="display: none;" class="abstract">
{{ paper.abstract }}
</div>
{% endfor %}

## Datasets and Replication Material

{% for dataset in site.data.datasets %}
- Dataset and replication material for the paper **"{{ dataset.paper }}"**, *{{ dataset.journal }}* ([data download]({{ dataset.link }}))
{% endfor %}