---
title: Arctos Developers Guide
authors: Dusty L. McDonald
date_updated: 2019-10-15
---

Tips, tricks, and conventions for developing Arctos code

### CSP

Write code as if Arctos had a very restrictive Content Security Policy.

* Avoid inline JavaScript. Put JavaScript in external .js files rather than <script>...</script> blocks.
* Avoid inline event handlers. Do not use onclick, onchange, onload, etc. Attach handlers with addEventListener() from external JavaScript.
* Avoid inline CSS. Prefer classes and external stylesheets over style="..." attributes or dynamically generated style blocks.
* Do not use eval() or equivalent dynamic code execution. Avoid eval(), new Function(), and APIs or libraries that require 'unsafe-eval'.
* Declare external dependencies explicitly. Do not casually load scripts, styles, fonts, images, frames, or API calls from new third-party domains. Assume every external origin must be explicitly permitted by CSP.
* Prefer same-origin resources. Host JavaScript, CSS, fonts, and other assets locally when practical instead of adding another CDN dependency.
* Keep resource types separate. Loading an image from a domain does not imply scripts, API connections, frames, or styles from that domain should also be permitted.
* Do not work around CSP. If CSP blocks new code, fix the implementation or document the required CSP change rather than requesting 'unsafe-inline', 'unsafe-eval', *, or an unnecessarily broad domain.
* Design new features for default-src 'self'. Treat access to anything beyond the Arctos origin as an explicit dependency that needs justification.
* Expect CSP to become stricter. Code that works only because the current policy is permissive should be considered technical debt.

### Database Connection

Do not write (or make significant updates to) application UI which connects directly to the database; all UI interaction should go through an API.

### Attributes

When possible, attribute components should be displayed in the order:


1. attribute_type
2. attribute_value
3. attribute_units
4. attribute_determiner
5. attribute_method
6. attribute_date
7. attribute_remark

ref: https://github.com/ArctosDB/arctos/issues/9637

Attributes as JSON should also use these keys. All are ``text`` except attribute_determiner, which is an object built with function ``getAgentJSON()`` and consisting of keys:


*  agent_name
*  agentID

NOTE: Some csv tools will not maintain suggested order, and Arctos JSON (PG datatype ``JSONB``) has no "column order." We can do no more that attempt to suggest order in many cases.


### URLS

* make internal URLs relative
* URL classes:
   * no class-->default browser behavior  
    * external-->"pop out" image appended, open in new window
    * newWinLocal-->"info" image appended, open in new window (use for links to arctos.museum information pages such as code tables)
       * do not use, needs deprecated

### CSS

* Use /includes/style.css for styling


## Component Loaders

(ref: https://github.com/ArctosDB/dev/issues/110)

* all user-supplied fields should be text, which is more portable. Handlers must check and cast as appropriate.
* all changes must be noted in the loader (modern templates provide a space)


## Identifier Convention

* internal identifiers are primary keys or tables, are integers, and should be named ``something_id``
* GUIDs are generally primary keys made GUID-ish, begin with ``https://arctos.database.museum/``, and should be referred to as ``somethingID`` (Note that DDL is not case sensitive and case will often be lost.)
* "DWC Triplets" ("local" record identifiers still widely referred to as GUID) should be referred to as "triplet" when reluctantly used. (See also https://github.com/orgs/ArctosDB/discussions/5310)


## Expand Select

This toggles MULTIPLE for a SELECT of id "accn_status":

```
<span data-ctl="accn_status" class="ui-icon ui-icon-arrow-4-diag expandoSelect"></span>
```

## Button-Links

Button + HREF

```
<a href="somepage.cfm"><input type="button" class="lnkBtn" value="Some Text"></a>
```

## Code Table Definer

* don't do this, see CSP above

```
<span class="infoLink" onclick="getCtDocVal('cttaxon_name_type','taxon_name_type');">Define</span>
```

where ``cttaxon_name_type`` is the relevant code table and ``taxon_name_type`` is the ID of the element being defined.

Or as a label

```
<label class="likeLink" onclick="getCtDocVal('ctcataloged_item_type','cataloged_item_type');" for="cataloged_item_type">
   Catalog Item Type
</label>
```

## Pick/select Inputs

* prefix placeholder with 'type+tab to pick ....'
* CSS class: pickInput
    * after success: goodPick
    * after fail: badPick

## Color Codes

Colors are defined in style.css. Use variables in code - ``background-color: var(--arctoslightblue);`` not ``background-color: #F6F8FC;;``


## Logos

Logos are in the images folder of the /ArctosDB/arctos-assets/ repository.


## last_usr and last_chg

Some tables have a lastuser and lastdate field, which generally exist to be picked up by subsequent actions particularly when a script is running on behalf of a user. These **should** default to meaningful values when a human is pushing buttons, but PG's environment can be a little wonky (and the test and prod DBs occasonally do not share settings). Best practice is to provide these values explicitly:

* ``last_usr=<cfqueryparam value="#session.username#" cfsqltype="cf_sql_varchar">``
* ``last_chg=<cfqueryparam value="#DateConvert('local2Utc',now())#" cfsqltype="cf_sql_timestamp">``
