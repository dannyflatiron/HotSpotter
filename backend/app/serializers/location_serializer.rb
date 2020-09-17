class LocationSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :content, :review_id, :name, :ssid, :type 
end
