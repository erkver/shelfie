delete from items
where product_id = $1;

select * from items;