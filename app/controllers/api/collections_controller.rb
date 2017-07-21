class Api::CollectionsController < ApplicationController
   def index
        @collections = Collection.all
        render "/api/collections/index"
    end

    def show
        @collection = Collection.find(params[:id])
        if @collection
            render "/api/collections/show"
        else
            render json: @collection.errors.full_messages, status: 404
        end
    end

    def create
        @collection = Collection.new(collection_params)
        @collection.author_id = current_user.id
        if @collection.save!
            render "/api/collections/show"
        else
            render json: @collections.errors.full_messages, status: 422
        end
    end

    def update
        @collection = current_user.collections.find(params[:id])
        if @collection.update_attributes(collection_params)
            render "/api/collections/show"
        else
            render json: @collections.errors.full_messages, status: 422
        end
    end

    def destroy
        @collection = Collection.find(params[:id])
        @collection.destroy
        render json: @collection.errors.full_messages, status: 404
    end

    private

    def collection_params
        params.require(:collection).permit(:title, :user_id)
    end
end
