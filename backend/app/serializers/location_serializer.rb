class LocationSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :location, :name, :ssid, :price, :reviews, :object_id
end
