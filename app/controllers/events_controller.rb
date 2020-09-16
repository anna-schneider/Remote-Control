class EventsController < ApplicationController
  before_action :set_event, only: [:show, :update, :destroy]


  # GET /events/1
  def show
    render json: @event, include: [:movies, :votes]
  end

  # POST /events
  def create
    @event = Event.new(event_params.except(:movies))
    #Loop through arr of movies ids
    event_params[:movies].each do |id|
      #Find movie in db by id
      movie = Movie.find(id)
      @event.movies.push(movie)
    end

    if @event.save
      render json: @event, include: [:movies, :votes], status: :created
    else
      render json: @event.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /events/1
  def update
    if @event.update(event_params)
      render json: @event
    else
      render json: @event.errors, status: :unprocessable_entity
    end
  end

  # DELETE /events/1
  def destroy
    @event.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_event
      @event = Event.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def event_params
      params.require(:event).permit(:username, :name, :date, movies: [])
    end
end
