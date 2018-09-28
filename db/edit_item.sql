update items
set name = $2,
price = $3,
image_url = $4

where product_id = $1;


-- select * from items
-- order by product_id asc;